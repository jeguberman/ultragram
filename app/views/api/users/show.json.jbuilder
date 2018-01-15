json.user do

  json.partial! 'api/users/user', user: @user

end


if @with_images

  json.images do
    json.array! @user.images do |image|
      json.extract! image, :id, :author_id
      json.image_url asset_path(image.image_url)
    end
  end

end
