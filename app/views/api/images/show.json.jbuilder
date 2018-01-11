
json.image do
    json.partial! 'api/images/image', image: @image
end

json.author do
    json.partial! 'api/users/user', user: @image.author
end

json.comments do
  json.array! @image.comments do |comment|
    json.extract! comment, :body, :id, :image_id
    json.extract! comment.author, :username
  end
end
