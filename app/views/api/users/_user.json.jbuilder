
json.extract! user, :id, :username, :personal_statement, :fullname, :profile_image_url, :password_digest

json.following user.following_ids
json.followed_by user.followed_by_ids

json.profile_image_url asset_path(user.profile_image_url)
