json.user do

  json.partial! 'api/users/user', user: @user

end

json.images do
  json.array! @user.images do |image|
    json.extract! image, :id
    json.image_url asset_path(image.image_url)
  end
end
