# json.image do

  json.extract! image, :id, :image_url, :author_id, :caption, :created_at
  json.image_url asset_path(image.image_url)

# end

# json.partial! 'api/users/user', user: image.author
