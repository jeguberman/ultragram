# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative './seeds_helper.rb'

User.destroy_all
Image.destroy_all
Comment.destroy_all
Like.destroy_all
Follow.destroy_all

create_users

intro_demo_and_thanos

intro_cthulu

intro_sunwukong

intro_rick_sanchez

rick_meets_thanos

inciting_action

act_two

climax

everyone = User.all.map { |user| user.id}
everyone.each { |id| Follow.create!(follower_id: User.find_by(username:"demo").id,followee_id: id)}
