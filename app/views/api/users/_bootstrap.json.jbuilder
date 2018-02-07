
json.extract! user, :id, :following

json.profile_image_url asset_path(user.profile_image_url)
