class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  helper_method :current_user

protected
  def authenticate_user
    if session[:user_id]
      @current_user = User.find session[:user_id]
      return true
    else
      #redirect_to(:controller => 'sessions', :action => 'login')
      #flash[:notice] = "You are not authorized to perform this action"
      return false
    end
  end

  def save_login_state
    if session[:user_id]
      #redirect_to activities_url(session[:user_id])
      return false
    else
      return true
    end
  end

  private 
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
