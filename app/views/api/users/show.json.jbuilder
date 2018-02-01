json.user do

  json.partial! 'api/users/user', user: @user

end

json.images @user.images.each do |image|
  json.set! image.id do
    json.partial! 'api/images/image', image: image
  end
end
