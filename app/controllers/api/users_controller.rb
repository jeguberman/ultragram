class Api::UsersController < ApplicationController
  #copied from bench bnb. to be edited after auth

  def index

  end

  def create
    @user = User.new(user_params)
    # @user.profile_image_url =

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
      #unprocessable entity
    end
  end

  def show
    
    if params[:username]
      @user = User.find_by(username: params[:username])
      if @user
        render 'api/users/show'
      else
        render json@user.errors.fullmessages, status: 404
      end

    else
      @user = User.find(params[:id])
      if @user
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 404
      end
    end
  end

  private

  def user_params

    params.require(:user).permit(:username, :password, :fullname, :profile_image_url)
  end


end
