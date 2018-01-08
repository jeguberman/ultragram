Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy] #why does benchbnb have a show route for sessions? their controller does not
    resources :images, only: [:create, :index, :show, :update, :destroy]
    resources :comments, only: [:create, :index, :show, :update, :destroy]
    # resources :image_likes, only: [:create, :destroy]
    # resources :comment_likes, only: [:create, :destroy]
  end

  root "static_pages#root"
end
