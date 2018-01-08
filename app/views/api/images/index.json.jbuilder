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
