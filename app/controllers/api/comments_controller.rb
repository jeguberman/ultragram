class Api::CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    comment.author_id = current_user.id
    if comment.save!
      @image = comment.image
      render 'api/images/show'
    else
      render json: comment.errors.full_messages
    end

  end

  def delete
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  def comment_params
    params.require(:comment).permit(:image_id, :body)
  end
end
