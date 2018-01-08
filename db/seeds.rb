# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Image.delete_all

User.create(
  username:"demo",
  password:"password",
  fullname:"demo user",
  personal_statement:"I am a fictitious hypothetical entitity who's existence is temporally bound between login and logout",
  profile_image_url:'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/003/original/Oversoul---Poster---Alex-Grey_x1000.png?1515356976'
)

User.create(
  username:"Cthulu",
  fullname:"error", password:"passwordryleh",
  personal_statement:"̶͉y̴̧̨͍͚͉̥̐̐̊̌̅̅̋̽͜é̴̡̼̤̖̮͇͊̽̒̏̕͞",
  profile_image_url:
  'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/006/original/cthuluselfie.jpg?1515448906'
)
User.create(
  username:"thanos",
  password:"deathandjewels",
  fullname:"dione",
  profile_image_url: 'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/005/original/thanos1.png?1515438059'
)

User.create(
  username:"Doom",
  password:"reedrichardssucks",
  fullname: "Victor Van Damme"

)

User.create(
  username:"TheDragon",
  password:"wineisgoodfortheblood",
  fullname:"Vlad Dracul"
)



Image.create(
  author_id: User.find_by(username:"demo").id,
  image_url: 'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/004/original/anonymous.jpg?1515375149',
  caption:'For a time, I existed in order to bind a datapoint on a foreign table to something tangible. Once the image is mounting to an anchor in reality, I am no longer needed. When that happens, I will be destroyed.',

)

Image.create( author_id: User.find_by(username:"thanos").id, image_url: 'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/005/original/thanos1.png?1515438059')

Image.create(
author_id: User.find_by(username:"Cthulu").id,
image_url: 'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/006/original/cthuluselfie.jpg?1515448906',
caption: '.
.
C̸̛̘̹͕̱̞͙͇͗̓̈͐͋̀̈͡͞t̷̛͚͚̺͍͕̦̹͕̾͗̀͋̂̒ḧ̶̰̩̭͓͙̭̺́̆̆̃̇͟͢͜ t̨͙͎̰̪̓̒̏́̑͌͐̏̎͊ô̶̥̤̦̳̘̓̃̈̀͋̚͠p̧̛̯̺̼̺͉̔͒̃̚̕͘͘ f̵̹͈̙͍̋͐̀̓̿̓͐̏͒́͢ţ̨̛̻̞͔̖͔͕̈́̉̐̃̀͂̀͘͜r̢͍̱̝͈̟͈̘͒̽̍̑̄͛͆͑̿͜͝ͅo̡͍͚̣̩͆̅̈͛̂̂̀̑͘  l̤̻̤̣͕̮̅̀̎͐́͋̏̕͜o̷̢̢̨̙̯̦͛̊̚͞͡ŗ̶̥͉͖̲̫̠̟̯̭̋́̀͗̐p͉̝̤̬͎̱̩̳̀̑͋̑̏̑̌̀́͡ͅ t͙̻̣͕̥̼͉̓͆̓̕͘͟͝r̴̨̢̼͉̞̋͂́̋̽̃̏̚͢͞o̳̗̲͉̗̺̟͖̗͛̋̆̓̃̊̀̆̒͞ͅḑ̖̝̫͗̎̇̒̀͆̑ͅ r̛̫͈͍̤̼̫̪̹͎̼̃̍̅̽͊̈̄̚͡ l̶̤͚͙̹̺̖͕͙͉̍͗̀͊̈̚͜y̴̧̨͍͚͉̥̐̐̊̌̅̅̋̽͜é̴̡̼̤̖̮͇͊̽̒̏̕͞ḩ̘̭̦̘͙̹̱̈́͂̐̈͘͟ ţ̴̪̣̻͙̞̞̩͕̓̓͗͋͜͝h̨͖͍̙͖̍͒̑́̄͑͡ȯ̠̻̠̞̝͈̖̣̹͎̐̇̒̌͗̑̈́͠t̸̨̛̗̳̩͈̳͙̳̳̿͒͑̐̔͊͘h̬̰̜̹͍̪̦̬̄̓́͋͗́͆͘͜͠͝ d͇̟͔̦̠̤̭̍̀̌̓̊̽̆́ͅơ̛̮͍̻̠͓̈́̓̒͞r̨̞̬̅̔̀̆͛̀̊͌̒͟͜͡ ţ̳̤̫̩͈̍̑̌́̄́̋̃́͝h̷̖̝̠̬̮͇̔͛̌̿̉͂ó̖̳̼̗̥͈̼̂̆̔͒̊̚t̴̰̯̭̮̬͙̞̬̃̊̾̃́͊͂̕h̶̡̯͕̦̦͍̠̙̗̆̂̐́̀̊͢ n̢̨̘̱̰̪̳̰̎̾̄͋͛͛͢į̙̣̱̦̘̓̃͑̄͋͜͟͟͠ͅȇ̡̺͖̭̘̮͓̻̈͆̅́͜͢͞g̨̧̛͓̣̞͈̅̐̑̾̈́ḩ̦̜̖͎̺̃̿̋͂̓͆̆̿̿̅͟ r͍̜̞̱͐̈̓̔̀̌͢ l̵̡̢͍̘͇͇͐̿̒̋́̏̉̀̕͠y̶̨̡̱̠͚͉̞̦̥̏̏̎̋͒̾è̷̢̘̭͙̮̓̏́͝͡h̴̢͔̝̪̖̗̭̣͕͌͌͂̽͑̚
.
.'
)

Image.create(
  author_id: User.find_by(username:"demo").id,
  image_url:'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/003/original/Oversoul---Poster---Alex-Grey_x1000.png?1515356976',
  caption:'All who experience are the universe experiencing itself. Therefor, is my life, though fleeting, eternal? Am I my predecessor and my successor?'
)

Image.create(
  author_id: User.find_by(username:"thanos").id,
  image_url:'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/002/original/infinity-gauntlet.jpg?1515189277',
  caption:'This is a relic from a really great time I had on earth once. I still have the glove but the jewels are gone.'
)

Image.create(
  author_id: User.find_by(username:"demo").id,
  image_url:'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/001/original/taijitu.png?1515187267',
  caption:'demo  The distinction between being and not is merely an illusion of the mind. It is imperative to release all anxiety.'
)
