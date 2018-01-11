

  json.extract! image, :id, :image_url, :author_id, :caption, :created_at, :comments
  json.image_url asset_path(image.image_url)
