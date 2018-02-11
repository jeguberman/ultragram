require 'zalgo'
class Api::UsersController < ApplicationController
  #copied from bench bnb. to be edited after auth

  def index

  end

  def create
    @user = User.new(user_params)
    # he_comes


    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
      #unprocessable entity
    end
  end

  def show
    @with_images = false
    if params[:username]
      @user = User.find_by(username: params[:username])
      @with_images = true
    else
      @user = User.find(params[:id])
    end

    if @user
      render :show
    else
      render json @user.errors.fullmessages, status: 404
    end

  end

  def create_follow # you are making this a standard for delete and create. You will pass the method you want to this or... something... I dunno, these are so similar, find a way to keep your code dry
    followee_id, follower_id = ready_follow
    follow = Follow.new(followee_id: followee_id, follower_id: follower_id)
    if follow.save!
      render :show
    else
      render json: follow.errors.full_messages
    end
  end

  def delete_follow
    followee_id, follower_id = ready_follow
    follow = Follow.find_by(followee_id: followee_id, follower_id: follower_id)
    if follow.destroy!
      render :show
    else
      render json: follow.errors.full_messages
    end
  end


  private

  def ready_follow
    @user = current_user
    followee_id = User.find_by(username: params[:username]).id
    follower_id = current_user.id
    return ([followee_id, follower_id])
  end

  def user_params

    params.require(:user).permit(:username, :password, :fullname, :profile_image_url)
  end

  def he_comes
    @user.personal_statement=Zalgo.he_comes(@user.personal_statement) if current_user.username == "Cthulu"
  end


end
