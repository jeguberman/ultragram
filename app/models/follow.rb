class Follow < ApplicationRecord
  validates :follower_id, :followee_id, presence: true
  validates_uniqueness_of :followee_id, scope: [:follower_id]
  validate :halt_follow_self

  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id

  belongs_to :followee,
    class_name: :User,
    foreign_key: :followee_id

    def halt_follow_self
      follower_id != followee_id
    end
end
