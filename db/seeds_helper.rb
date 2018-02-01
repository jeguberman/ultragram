def create_users
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

  User.create!(
    username:"dirtysanchez42",
    password:"picklerick",
    fullname:"Rick Sanchez",
    personal_statement: "I'm Rick Sanchez from universe D-42, I enjoy scientific engineering and forming meaningful human connections through internet social media!",
    profile_image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/schwifty.jpg'
  )
end

def intro_demo_and_thanos
  Image.create!(
    author_id: User.find_by(username:"demo").id,
    image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/anonymous.jpg',
    caption:'For a time, I existed in order to bind a datapoint on a foreign table to something tangible. Once the image is mounting to an anchor in reality, I am no longer needed. When that happens, I will be destroyed.',
  )

  Image.create!(
    author_id: User.find_by(username:"demo").id,
    image_url:'https://1.bp.blogspot.com/-zoeO4xGzjaY/VT8E6RZpb8I/AAAAAAAAa3E/HW5ypu7AdKw/s1600/hindu-trimurti-brahma-vishnu-shiva.jpg',
    caption:'The cycle of creation and destruction is eternal, we are but masks on the many faces of a universe that plays within itself'
  )

  Image.create!( author_id: User.find_by(username:"thanos").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/thanos1.png')


  Image.create!( author_id: User.find_by(username:"demo").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/The-Neverending-Dreamer1.jpg')

  Image.create!( author_id: User.find_by(username:"demo").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/Alex-Grey-Wallpapers-013.jpg')

  Image.create!( author_id: User.find_by(username:"demo").id, image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/birdart.jpg')

  Comment.create!(
    author_id: User.find_by(username:"thanos").id,
    image_id: User.find_by(username:"demo").images[2].id,
    body:"I've been following your posts Demo, I fancy myself a philosopher as well, I look forward to seeing what you write in the future"
  )

  Follow.create!(
    follower_id: User.find_by(username:"thanos").id,
    followee_id: User.find_by(username: "demo").id
  )

end

def intro_cthulu
  Follow.create(
    follower_id: User.find_by(username: "Cthulu").id,
    followee_id: User.find_by(username: "demo").id
  )


  Follow.create(
    follower_id: User.find_by(username: "Cthulu").id,
    followee_id: User.find_by(username: "thanos").id
  )


  Follow.create(
    follower_id: User.find_by(username: "Cthulu").id,
    followee_id: User.find_by(username: "dirtysanchez42").id
  )

  Image.create!(
  author_id: User.find_by(username:"Cthulu").id,
  image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/cthuluselfie.jpg',
  caption: 'Snow selfie!'
  )
end

def intro_sunwukong
  Follow.create(
    follower_id: User.find_by(username: "monkeyking").id,
    followee_id: User.find_by(username: "demo").id
  )

  Follow.create(
    follower_id: User.find_by(username: "monkeyking").id,
    followee_id: User.find_by(username: "thanos").id
  )


  Follow.create(
    follower_id: User.find_by(username: "monkeyking").id,
    followee_id: User.find_by(username: "Cthulu").id
  )

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
end

def intro_rick_sanchez
  Image.create!(
    author_id: User.find_by(username: "dirtysanchez42").id,
    image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/tinyrick.png',
    caption: 'look, I\'m a little boy in this picture! I\'m making music at a party! You should follow me!'
  )

  Image.create!(
    author_id: User.find_by(username: "dirtysanchez42").id,
    image_url: 'https://s3.amazonaws.com/ULTRAGRAM-DEV/morty.png',
    caption: 'My grandson, morty, posing for a family selfie, I love my family!'
  )
end

def rick_meets_thanos
  Image.create!(
    author_id: User.find_by(username:"thanos").id,
    image_url:'https://s3.amazonaws.com/ULTRAGRAM-DEV/infinity-gauntlet.jpg',
    caption:'This is a relic from a really great time I had on earth once. I still have the glove but the jewels are gone.'
  )

  Comment.create!(
    author_id: User.find_by(username:"dirtysanchez42").id,
    image_id: Image.last.id,
    body: 'Heeeeey, thanos! I noticed you like gloves! Gloves are totally rad dude! I can make gloves! You should follow me!'
  )

  Comment.create!(
    author_id: User.find_by(username:"thanos").id,
    image_id: Image.last.id,
    body: 'I\'m not really into gloves, it\'s the gems. The gauntlet is a vessel for their power. When combined, the wearer becomes as a God of the universe'
  )

  Comment.create!(
    author_id: User.find_by(username:"dirtysanchez42").id,
    image_id: Image.last.id,
    body: 'Ok. I misread the situation, that\'s my bad. You seem like a straight shooter, so I\'ll lay it out. I\'m trying to create a pocket reality, and without getting into the dirty details, I need followers on social media sites. Help a brother out?'
  )


  Comment.create!(
    author_id: User.find_by(username:"thanos").id,
    image_id: Image.last.id,
    body: 'oh. Sure, ok'
  )



  Follow.create!(
    follower_id: User.find_by(username:"thanos").id,
    followee_id: User.find_by(username: "dirtysanchez42").id
  )
end

def inciting_action
  Image.create!(
    author_id: User.find_by(username:"demo").id,
    image_url:'https://s3.amazonaws.com/ULTRAGRAM-DEV/Oversoul---Poster---Alex-Grey_x1000.png',
    caption:'All who experience are the universe experiencing itself. Therefor, is my life, though fleeting, eternal? Am I my predecessor and my successor?'
  )

  Comment.create(
    author_id: User.find_by(username:"dirtysanchez42").id,
    image_id: Image.last.id,
    body: "Heeeeey.... guuuuy! If it's consciousness expanding questions about the nature of reality you're after, my adventures will blow your mind straight open! And also, I can make LSD, so... Follow my feed!"
  )

  Comment.create(
    author_id: User.find_by(username:"demo").id,
    image_id: Image.last.id,
    body: "What?"
  )

  Comment.create(
    author_id: User.find_by(username:"dirtysanchez42").id,
    image_id: Image.last.id,
    body:"Just... follow me! I need followers!"
  )

  Comment.create(
    author_id: User.find_by(username:"monkeyking").id,
    image_id: Image.last.id,
    body:"My own adventures are the greatest in the universe, I personally delivered Xuanzang to the west with the sacred scrolls of Transcendence and Good Will."
  )

  Comment.create(
    author_id: User.find_by(username:"dirtysanchez42").id,
    image_id: Image.last.id,
    body:"That's... ok! Great! You should follow me!"
  )

  Comment.create(
    author_id: User.find_by(username:"monkeyking").id,
    image_id: Image.last.id,
    body:"ok!"
  )

  Follow.create(
    follower_id: User.find_by(username: "monkeyking").id,
    followee_id: User.find_by(username: "dirtysanchez42").id
  )

end

def act_two
  Image.create!(
    author_id: User.find_by(username:"monkeyking").id,
    image_url: 'http://s3.amazonaws.com/ULTRAGRAM-DEV/sonwukong2.jpg',
    caption:'I am Sun Wukong, tormentor of the Beuracracy of Heaven. Three times I am immortal I will never know the touch of death!'
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
    body:"why would I want that for myself?"
  )
end

def climax
  Image.create!(
    author_id: User.find_by(username:"demo").id,
    image_url:'https://s3.amazonaws.com/ULTRAGRAM-DEV/taijitu.png',
    caption:'The distinction between being and not is merely an illusion of the mind.'
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
    author_id: User.find_by(username:"Cthulu").id,
    image_id:  Image.last.id,
    body:"I find your universe to be small and uncomplicated, though I find a pleasure in permitting a portion of myself to intersect with the dimensions you call \"space\""
  )

  Comment.create!(
    author_id: User.find_by(username:"monkeyking").id,
    image_id:  Image.last.id,
    body:"I am not afraid of you purple man. I am he who feasted on the peaches of the heavenly orchards"
  )

  Comment.create!(
    author_id: User.find_by(username:"dirtysanchez42").id,
    image_id: Image.last.id,
    body: "i liek youre styl monkey man. I'm gona make Im build you a rocket ship and we'll"
  )

  Comment.create!(
    author_id: User.find_by(username:"demo").id,
    image_id:  Image.last.id,
    body:"Who are you people? Are you my friends? Do we like each other?"
  )

  User.all do |user|
    Follow.new(
      follower_id: User.find_by(username:"demo").id,
      followee_id: user.id
    )
  end
end
