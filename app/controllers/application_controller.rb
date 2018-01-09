class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #copied from bench bnb,

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user) #resets given user's session token and sends new session token to client. sets @current_user to given user
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401 #401===unauthorized
    end
  end

end
