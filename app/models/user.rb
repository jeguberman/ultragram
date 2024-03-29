class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, :fullname, presence: true

  validates :username, :session_token, uniqueness: true

  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :profile_image_url, default_url: "//s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/013/original/anonymous.jpg"
  validates_attachment_content_type :profile_image_url, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token#, :ensure_profile_picture

  has_many :images,
    class_name: :Image,
    foreign_key: :author_id

  has_many :comments,
    class_name: :Comment,
    foreign_key: :author_id

  has_many :likes

  has_many :following_associations,
    class_name: :Follow,
    foreign_key: :follower_id

  has_many :following, through: :following_associations,
    source: :followee

  has_many :followed_by_associations,
    class_name: :Follow,
    foreign_key: :followee_id

  has_many :followed_by, through: :followed_by_associations,
    source: :follower






  def self.find_by_credentials(username, password) #searches User table by username. if given password is password for user, returns user, else returns nil.
    user = User.find_by(username: username)
    if (user && user.is_password?(password))
      return user
    end
    return nil
  end

  def password=(password) #creates instance variable of given password (for validation), then salts and hashes password for password_digest
    @password = password
    puts password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password) #returns true if given password, when properly salted and hashed, matches password_digest
    puts password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token! #changes self.session_token, saves the new token to the database, and returns the session token
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token #generates a 16 digit, base 64 random string to be used as the session token. Does NOT actually create a session token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token #sets self.session_token and returns session_token. if session token exists elsewehere in the database, continues to generate new session tokens
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
