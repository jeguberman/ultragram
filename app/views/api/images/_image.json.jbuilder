

  json.extract! image, :id, :image_url, :author_id, :caption, :created_at
  json.image_url asset_path(image.image_url)

  json.comments image.comments do |comment|
    json.set! comment.id do
      json.extract! comment, :body, :id, :image_id
      json.extract! comment.author, :username
    end
  end
