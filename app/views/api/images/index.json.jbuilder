json.images @images.each do |image|
  json.set! image.id do
    json.partial! 'api/images/image', image: image
  end
end


json.authors @images.each do |image|
  json.set! image.author_id do
    json.partial! 'api/users/user', user: image.author
  end
end

#electing to fetch comments with image partial since comments will never be seen without the image
# json.comments @images.each do |image|
#   next if image.comments.length == 0;
#   json.array! image.comments do |comment|
#     json.set! comment.id do
#       json.extract! comment, :body, :id, :image_id
#       json.extract! comment.author, :username
#     end
#   end
# end
