
json.extract! user, :id, :username, :personal_statement, :fullname, :profile_image_url, :password_digest, :following_ids




json.profile_image_url asset_path(user.profile_image_url)
