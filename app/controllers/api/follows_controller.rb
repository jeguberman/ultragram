class FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)

    if @follow.save!
      @user = User.find(params[:followee_id])
      render :show
    else
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    @follow = Follow.find_by(followee_id: follow_params[:followee_id], follower_id: follow_params[:follower_id])
    if @follow.destroy
      @user = User.find(params[:followee_id])
      render :show
    else
      render json: @follow.errors.full_messages
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
