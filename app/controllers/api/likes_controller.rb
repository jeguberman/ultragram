class Api::LikesController <ApplicationController

  def create
    @like = Like.new(like_params)

    if @like.save!
      @image = Image.find(params[:image_id])
      render :show
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy

    @like = Like.find_by(image_id: like_params[:image_id], user_id: like_params[:user_id])
    if @like.destroy
      @image = Image.find(params[:image_id])
      render :show
    else
      render json: @like.errors.full_messages
    end
  end

  private

  def like_params
    params.require(:like).permit(:image_id, :user_id)
  end

end
