

  json.extract! image, :id, :author_id, :caption, :created_at
  json.image_url asset_path(image.image_url)

  json.comments image.comments do |comment|
    json.extract! comment, :body, :id, :image_id
    json.extract! comment.author, :username
  end
