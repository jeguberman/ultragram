class Follow < ApplicationRecord
  validates :follower_id, :followee_id, presence: true
  validates_uniqueness_of :followee_id, scope: [:follower_id]

  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id

  belongs_to :followee,
    class_name: :User,
    foreign_key: :followee_id
end
