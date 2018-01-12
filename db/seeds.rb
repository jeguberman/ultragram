# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Image.destroy_all

User.create!(
  username:"demo",
  password:"password",
  fullname:"demo user",
  personal_statement:"I am a fictitious hypothetical entitity who's existence is temporally bound between login and logout",
  profile_image_url:'https://s3.amazonaws.com/ULTRAGRAM-PRO/images/image_urls/000/000/018/original/The-Neverending-Dreamer1.jpg'
)

User.create!(
  username:"Cthulu",
  fullname:"error", password:"passwordryleh",
  personal_statement:"̶͉y̴̧̨͍͚͉̥̐̐̊̌̅̅̋̽͜é̴̡̼̤̖̮͇͊̽̒̏̕͞",
  profile_image_url:
  'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/006/original/cthuluselfie.jpg'
)

User.create!(
  username:"thanos",
  password:"deathandjewels",
  fullname:"dione",
  profile_image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/005/original/thanos1.png'
)

User.create!(
  username:"monkeyking",
  password:"journeytothewest",
  fullname:"SunWukong",
  profile_image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/005/original/thanos1.png'
)



#
#
Image.create!(
  author_id: User.find_by(username:"demo").id,
  image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/004/original/anonymous.jpg?1515375149',
  caption:'For a time, I existed in order to bind a datapoint on a foreign table to something tangible. Once the image is mounting to an anchor in reality, I am no longer needed. When that happens, I will be destroyed.',
)
#
Image.create!( author_id: User.find_by(username:"thanos").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/005/original/thanos1.png?1515438059')


Image.create!( author_id: User.find_by(username:"demo").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-PRO/images/image_urls/000/000/018/original/The-Neverending-Dreamer1.jpg?1515762943')

Image.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/077/original/sonwukong1.jpg?1515762062',
  caption: 'I am the great Monkey King, Sun Wukong! I have bested the armies of heaven and hell alike! I will face any challenger!'
)

Image.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/075/original/sunwukong3.jpg',
  caption: 'My golden armor is shines so brightly it makes the sun jealous!'
)

Image.create!(
  author_id: User.find_by(username:"demo").id,
  image_url:'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/003/original/Oversoul---Poster---Alex-Grey_x1000.png?1515356976',
  caption:'All who experience are the universe experiencing itself. Therefor, is my life, though fleeting, eternal? Am I my predecessor and my successor?'
)

Image.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_url: 'http://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/076/original/sonwukong2.jpg?1515762027',
  caption:'I am Sun Wukong, tormentor of the Beuracracy of Heaven. Three times I am immortal I will never know the touch of death!'
)

Image.create!(
  author_id: User.find_by(username:"thanos").id,
  image_url:'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/002/original/infinity-gauntlet.jpg?1515189277',
  caption:'This is a relic from a really great time I had on earth once. I still have the glove but the jewels are gone.'
)

Image.create!(
  author_id: User.find_by(username:"demo").id,
  image_url:'https://1.bp.blogspot.com/-zoeO4xGzjaY/VT8E6RZpb8I/AAAAAAAAa3E/HW5ypu7AdKw/s1600/hindu-trimurti-brahma-vishnu-shiva.jpg',
  caption:'The cycle of creation and destruction is eternal, we are but masks on the many faces of a universe that plays within itself'
)

Image.create!(
author_id: User.find_by(username:"Cthulu").id,
image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/006/original/cthuluselfie.jpg?1515448906',
caption: '.
.
C̸̛̘̹͕̱̞͙͇͗̓̈͐͋̀̈͡͞t̷̛͚͚̺͍͕̦̹͕̾͗̀͋̂̒ḧ̶̰̩̭͓͙̭̺́̆̆̃̇͟͢͜ t̨͙͎̰̪̓̒̏́̑͌͐̏̎͊ô̶̥̤̦̳̘̓̃̈̀͋̚͠p̧̛̯̺̼̺͉̔͒̃̚̕͘͘ f̵̹͈̙͍̋͐̀̓̿̓͐̏͒́͢ţ̨̛̻̞͔̖͔͕̈́̉̐̃̀͂̀͘͜r̢͍̱̝͈̟͈̘͒̽̍̑̄͛͆͑̿͜͝ͅo̡͍͚̣̩͆̅̈͛̂̂̀̑͘  l̤̻̤̣͕̮̅̀̎͐́͋̏̕͜o̷̢̢̨̙̯̦͛̊̚͞͡ŗ̶̥͉͖̲̫̠̟̯̭̋́̀͗̐p͉̝̤̬͎̱̩̳̀̑͋̑̏̑̌̀́͡ͅ t͙̻̣͕̥̼͉̓͆̓̕͘͟͝r̴̨̢̼͉̞̋͂́̋̽̃̏̚͢͞o̳̗̲͉̗̺̟͖̗͛̋̆̓̃̊̀̆̒͞ͅḑ̖̝̫͗̎̇̒̀͆̑ͅ r̛̫͈͍̤̼̫̪̹͎̼̃̍̅̽͊̈̄̚͡ l̶̤͚͙̹̺̖͕͙͉̍͗̀͊̈̚͜y̴̧̨͍͚͉̥̐̐̊̌̅̅̋̽͜é̴̡̼̤̖̮͇͊̽̒̏̕͞ḩ̘̭̦̘͙̹̱̈́͂̐̈͘͟ ţ̴̪̣̻͙̞̞̩͕̓̓͗͋͜͝h̨͖͍̙͖̍͒̑́̄͑͡ȯ̠̻̠̞̝͈̖̣̹͎̐̇̒̌͗̑̈́͠t̸̨̛̗̳̩͈̳͙̳̳̿͒͑̐̔͊͘h̬̰̜̹͍̪̦̬̄̓́͋͗́͆͘͜͠͝ d͇̟͔̦̠̤̭̍̀̌̓̊̽̆́ͅơ̛̮͍̻̠͓̈́̓̒͞r̨̞̬̅̔̀̆͛̀̊͌̒͟͜͡ ţ̳̤̫̩͈̍̑̌́̄́̋̃́͝h̷̖̝̠̬̮͇̔͛̌̿̉͂ó̖̳̼̗̥͈̼̂̆̔͒̊̚t̴̰̯̭̮̬͙̞̬̃̊̾̃́͊͂̕h̶̡̯͕̦̦͍̠̙̗̆̂̐́̀̊͢ n̢̨̘̱̰̪̳̰̎̾̄͋͛͛͢į̙̣̱̦̘̓̃͑̄͋͜͟͟͠ͅȇ̡̺͖̭̘̮͓̻̈͆̅́͜͢͞g̨̧̛͓̣̞͈̅̐̑̾̈́ḩ̦̜̖͎̺̃̿̋͂̓͆̆̿̿̅͟ r͍̜̞̱͐̈̓̔̀̌͢ l̵̡̢͍̘͇͇͐̿̒̋́̏̉̀̕͠y̶̨̡̱̠͚͉̞̦̥̏̏̎̋͒̾è̷̢̘̭͙̮̓̏́͝͡h̴̢͔̝̪̖̗̭̣͕͌͌͂̽͑̚
.
.'
)

Image.create!(
  author_id: User.find_by(username:"demo").id,
  image_url:'https://s3.amazonaws.com/ULTRAGRAM-DEV/images/image_urls/000/000/001/original/taijitu.png?1515187267',
  caption:'The distinction between being and not is merely an illusion of the mind. It is imperative to release all anxiety.'
)

Comment.create!(
  author_id: User.find_by(username:"thanos").id,
  image_id: User.find_by(username:"demo").images[2].id,
  body:"I've been following your posts Demo, I fancy myself a philosopher as well, I look forward to seeing what you write in the future"
)

Comment.create!(
  author_id: User.find_by(username:"thanos").id,
  image_id: User.find_by(username:"monkeyking").images[2].id,
  body:"dude, what is it with you?"
)

Comment.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_id: User.find_by(username:"monkeyking").images[2].id,
  body:"You wish to challenge me? I am no ordinary opponent, I am immortal."
)

Comment.create!(
  author_id: User.find_by(username:"thanos").id,
  image_id: User.find_by(username:"monkeyking").images[2].id,
  body:"why would I want that?"
)

Comment.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_id: User.find_by(username:"demo").images[4].id,
  body:"Taoism, huh? I tried taoism, but then Lao Tzu tried to boil me in a celestial cauldron for 11 days. Buddhism is the way to be"
)

Comment.create!(
  author_id: User.find_by(username:"demo").id,
  image_id: User.find_by(username:"demo").images[4].id,
  body:"what?"
)

Comment.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_id: User.find_by(username:"demo").images[4].id,
  body:"I'm saying the buddha holds all of creation in his hand, his fingers are the pillar of the universe, that is how I peed on his thumb when I jumped to the farthest corners of the cosmos"
)

Comment.create!(
  author_id: User.find_by(username:"thanos").id,
  image_id: User.find_by(username:"demo").images[4].id,
  body:"dude, are you on drugs?"
)

Comment.create!(
  author_id: User.find_by(username:"demo").id,
  image_id: User.find_by(username:"demo").images[4].id,
  body:"Who are you people? Are you my friends? Do we like each other?"
)

Comment.create!(
  author_id: User.find_by(username:"Cthulu").id,
  image_id: User.find_by(username:"demo").images[4].id,
  body:".
.
t̡̡̫̪̭̹̦̆́̔͗͐́͠h̨̡͉̠̮͍̮͒̒͊̄̆̐̂ȏ̶͉͙̬̮̟͕̺͖͔̂̔͐̈́̓̚͠͞t̮͚̳͈͊̉̉̿͟͞h̻̪̳̦͛͑́̐͐̽̊͢͜͢ͅ l͕͎̦̟̺̠̗͊̀̉̇̐̔͂́̕̚ͅo̤͍͙̺̭̱̖͔̺̿̀͐͗̋͐̂̽͝k̨̝̖͔͔̯͔̻̓̐́̀̚͟͜i̦͕̣̠̻̝̍̇̾̐̄̐͢ t͉͕̱̰̪̠̞͆͆͋̐̚͘ȇ̷̹̟̠̞͈̯͍͇̥͇̊͂̆͒̇̋͡ĺ̡̛̞͓̝͇͊̄̕o̶̧̺͙̩̞͕̤͇͚̘̿́̋͂̑̃̕͘̚͝r̶̳̝͓̤̙̰̙̳̦̉̎̈́́̉̇̿͂͟ f̨͙̻̗͇̓̐̂́͂͘̚͜͠͡r̷̡̬̤͕͕̫̲̅̄̇̈̈́̔̚͢͡͝͡ẽ̵̡͙̳͓͓̟̳̅̒͂̔y̸͕͇̩͔̱̌͛͑̔̉̒́͘͡ẻ̷͎̺̩̘͇̮͍̖̈́̍́͒͞ͅr̡͓̠̖͈̝̔̇͛̊͡ w̸͎̙͇͖͋̒͗̔͊̈́͛͌̉̏ͅo̸̪͚̰̳͇͂̈́̔̐̇̄̄̕͜͡ṯ̢̛͖̫̇̋͢͝͡ą̷̙̟̦͎̥̯̾͋́̎̐̔̅͜͝͝͠ͅn̵̳̰͕̜̲̜͓͈̳͙͗͛̂͂̏ h̵̢̥̺̥̗̯̹̪͆̉̿̏̾̑̒͑͜͜͡ȩ͖̣̹̲̣̲͗́͑́́͘̕͘͟͝l̨̜̗̤͒̎̋̾̇̋͘͜͞ b̸̧̠̜̤̻̠̼́̀̋̑͋̾̕͠a̯̪̜͎̣͎̝͆̋̊̈̂̀̀̕͢l̡̨̡̻̻̘͓̄̊̒̓͠͠ m͓̯̻̣̰̮̣͍̖͌̆͑͒̀̀̔͘͞ė̶͉͎̞̤̜̣̺́͒̏̈́͗͆̾l̵͔̮̺̞̣͆̋͗͆͌̑̌͢͝͡ơ̢̠̞̟̙̞͋͐̃̏̍̓r͈͇̦̟̘̜̹̎̎̀͌͋͜͜͝͞
.
."
)

Comment.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_id: User.find_by(username:"demo").images[4].id,
  body:"I am not afraid of you purple man. I am he who feasted on the peaches of the heavenly orchards"
)

# Comment.create!(
#   author_id: User.find_by(username:"demo").id,
#   image_id: User.find_by(username:"demo").images[4].id,
#   body:""
# )
#
# Comment.create!(
#   author_id: User.find_by(username:"").id,
#   image_id: User.find_by(username:"demo").images[4].id,
#   body:""
# )
#
# Comment.create!(
#   author_id: User.find_by(username:"").id,
#   image_id: User.find_by(username:"demo").images[4].id,
#   body:""
# )
