
class Like < ApplicationRecord
  validates :image_id, :user_id, presence: true

  belongs_to :image

  belongs_to :liker,
    class_name: :User,
    foreign_key: :user_id
end
