class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)

    if @follow.save!
      # debugger
      json_response
    else
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    # debugger
    @follow = Follow.find_by(
      followee_id: follow_params[:followee_id],
      follower_id: follow_params[:follower_id]
    )
    if @follow.destroy
      json_response
    else
      render json: @follow.errors.full_messages
    end
  end

  private

  def json_response
    @user = User.find(follow_params[:follower_id])
    render "api/users/show", user: @user
  end

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
