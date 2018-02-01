json.user do

  json.partial! 'api/users/user', user: @user
  json.followed_by @user.followed_by
  json.following @user.following

end

json.images @user.images.each do |image|
  json.set! image.id do
    json.partial! 'api/images/image', image: image
  end
end
