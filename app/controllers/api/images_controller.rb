class Api::ImagesController < ApplicationController
  # before_action: require_logged_in #I'm like 95% sure this doesn't need to be here, but if I'm wrong, I'd like anybody reviewing my code to see I didn't just forget about it.

  def index
    @images=Image.all.includes(:author).order(created_at: :desc)
    return @images
  end

  def create
    @image = Image.new(image_params)
    @image.author_id = current_user.id if @image.author_id == nil
    if @image.save
      render :show
    else
      render json: @image.errors.full_messages
    end
  end


  def update
    @image = current_user.images.find(params[:id])
    if @image.update_attributes(image_params)
      render :show
    else
      render json: @image.errors.full_messages
    end
  end

  def show

    @image = Image.find(params[:id])
    render 'api/images/show'
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy
  end

  private

  def image_params
    params.require(:image).permit(:image_url, :caption, :author_id)
  end

end


# def index
#     if params["author_id"]
#       @images = Image.find_by({author_id: params["author_id"].to_i})
#     else
#       @images=Image.all.includes(:authors).order!('created_at DESC')#thanks to Maxine Chui of Oct '17 cohort', #thanks to justin shieh for 'includes'
#     end
#
#   return @images
# end
