class Comment < ApplicationRecord
validates :body, :author_id, :image_id, presence: true

belongs_to :image

belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

end
