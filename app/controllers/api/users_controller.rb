class Api::UsersController < ApplicationController
  #copied from bench bnb. to be edited after auth
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422 #unprocessable entity
    end
  end

  def show
    # debugger
    @user = User.find(params[:id])
    if @user
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :fullname)
  end
end
