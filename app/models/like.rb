
class Like < ApplicationRecord
  validates :image_id, :user_id, presence: true
  validates_uniqueness_of :user_id, :scope => [:image_id]

  belongs_to :image

  belongs_to :liker,
    class_name: :User,
    foreign_key: :user_id
end
