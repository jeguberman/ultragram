class Api::SessionsController < ApplicationController
  #copied from benchbnb
  def create
    debugger
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    debugger
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Bad username or password"], status: 401 #401 authorization required
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Must be loggined to logout"], status: 404 #404 not find
    end
  end
end
