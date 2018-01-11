class Comment < ApplicationRecord

belongs_to :image

belongs_to :author_id,
  class_name: :User,
  foreign_key: :author_id

end
