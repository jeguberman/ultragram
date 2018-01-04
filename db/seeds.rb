# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create(username:"demo", password:"password", fullname:"demo user", personal_statement:"I am a fictitious hypothetical entitity who's existence is temporally bound between login and logout")
User.create(username:"Cthulu", fullname:"error", password:"passwordryleh", personal_statement:"ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn")
User.create(username:"thanos", password:"deathandjewels", fullname:"dione")
User.create(username:"vvDoom", password:"reedrichardssucks", fullname: "Victor Van Damme")
