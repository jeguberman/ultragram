class Image < ApplicationRecord
  validates :author_id, presence: true

  has_attached_file :image_url, default_url: "missing.png"
  validates_attachment_content_type :image_url, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  def url
    self.image_url.url
  end

end
