require 'zalgo'
class Api::CommentsController < ApplicationController
  def create

    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    he_comes
    if @comment.save!
      @image = Image.find(@comment.image_id)
      # render 'api/images/show'
      # redirect_to 'api/images'
      #redirect_to images_url
      render :show
    else
      render json: @comment.errors.full_messages
    end

  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages
    end
  end

  def comment_params
    params.require(:comment).permit(:image_id, :body)
  end

  def he_comes
    @comment.body=Zalgo.he_comes(@comment.body) if current_user.username == "Cthulu"
  end

end
