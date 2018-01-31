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
  profile_image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/The-Neverending-Dreamer1.jpg'
)

User.create!(
  username:"Cthulu",
  fullname:"error", password:"passwordryleh",
  personal_statement:"I am a priest of higher dimensional entities, I will destroy the world merely by awakening from my millienia long slumber.",
  profile_image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/cthuluselfie.jpg'
)

User.create!(
  username:"thanos",
  password:"deathandjewels",
  fullname:"dione",
  profile_image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/thanos1.png'
)

User.create!(
  username:"monkeyking",
  password:"journeytothewest",
  fullname:"SunWukong",
  profile_image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/sunwukong3.jpg'
)



#
#
Image.create!(
  author_id: User.find_by(username:"demo").id,
  image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/anonymous.jpg',
  caption:'For a time, I existed in order to bind a datapoint on a foreign table to something tangible. Once the image is mounting to an anchor in reality, I am no longer needed. When that happens, I will be destroyed.',
)
#
Image.create!( author_id: User.find_by(username:"thanos").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/thanos1.png')


Image.create!( author_id: User.find_by(username:"demo").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/The-Neverending-Dreamer1.jpg')

Image.create!( author_id: User.find_by(username:"demo").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/Alex-Grey-Wallpapers-013.jpg')

Image.create!( author_id: User.find_by(username:"demo").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/birdart.jpg')

Image.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/sonwukong1.jpg',
  caption: 'I am the great Monkey King, Sun Wukong! I have bested the armies of heaven and hell alike! I will face any challenger!'
)

Image.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/sunwukong3.jpg',
  caption: 'My golden armor is shines so brightly it makes the sun jealous!'
)

Image.create!(
  author_id: User.find_by(username:"demo").id,
  image_url:'https://s3.amazonaws.com/ULTRAGRAM-DEV/Oversoul---Poster---Alex-Grey_x1000.png',
  caption:'All who experience are the universe experiencing itself. Therefor, is my life, though fleeting, eternal? Am I my predecessor and my successor?'
)

Image.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_url: 'http://s3.amazonaws.com/ULTRAGRAM-DEV/sonwukong2.jpg',
  caption:'I am Sun Wukong, tormentor of the Beuracracy of Heaven. Three times I am immortal I will never know the touch of death!'
)

Image.create!(
  author_id: User.find_by(username:"thanos").id,
  image_url:'https://s3.amazonaws.com/ULTRAGRAM-DEV/infinity-gauntlet.jpg',
  caption:'This is a relic from a really great time I had on earth once. I still have the glove but the jewels are gone.'
)

Image.create!(
  author_id: User.find_by(username:"demo").id,
  image_url:'https://1.bp.blogspot.com/-zoeO4xGzjaY/VT8E6RZpb8I/AAAAAAAAa3E/HW5ypu7AdKw/s1600/hindu-trimurti-brahma-vishnu-shiva.jpg',
  caption:'The cycle of creation and destruction is eternal, we are but masks on the many faces of a universe that plays within itself'
)

Image.create!(
author_id: User.find_by(username:"Cthulu").id,
image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/cthuluselfie.jpg',
caption: 'I still have this sweater.'
)

Image.create!(
  author_id: User.find_by(username:"demo").id,
  image_url:'https://s3.amazonaws.com/ULTRAGRAM-DEV/taijitu.png',
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
  image_id: Image.last.id,
  body:"Taoism, huh? I tried taoism, but then Lao Tzu tried to boil me in a celestial cauldron for 11 days. Buddhism is the way to be"
)

Comment.create!(
  author_id: User.find_by(username:"demo").id,
  image_id:  Image.last.id,
  body:"what?"
)

Comment.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_id:  Image.last.id,
  body:"I'm saying the buddha holds all of creation in his hand, his fingers are the pillar of the universe, that is how I peed on his thumb when I jumped to the farthest corners of the cosmos"
)

Comment.create!(
  author_id: User.find_by(username:"thanos").id,
  image_id:  Image.last.id,
  body:"dude, are you on drugs?"
)

Comment.create!(
  author_id: User.find_by(username:"demo").id,
  image_id:  Image.last.id,
  body:"Who are you people? Are you my friends? Do we like each other?"
)

Comment.create!(
  author_id: User.find_by(username:"Cthulu").id,
  image_id:  Image.last.id,
  body:"I find your universe to be small and uncomplicated, though I find a pleasure in permitting a portion of myself to intersect with the dimensions you call \"space\""
)

Comment.create!(
  author_id: User.find_by(username:"monkeyking").id,
  image_id:  Image.last.id,
  body:"I am not afraid of you purple man. I am he who feasted on the peaches of the heavenly orchards"
)
