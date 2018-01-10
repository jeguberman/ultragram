
json.image do
    json.partial! 'api/images/image', image: @image
end

json.author do
    json.partial! 'api/users/user', user: @image.author
end
