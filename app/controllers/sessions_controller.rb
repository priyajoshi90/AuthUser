class SessionsController < ApplicationController
  before_filter :authenticate_user, :only => [:home, :profile, :setting]
  before_filter :save_login_state, :only => [:login, :login_attempt]
  respond_to :html, :xml, :json
  def login
  end

  def login_attempt
  	authorized_user = User.authenticate(params[:username], params[:password])
  	if authorized_user
      p authorized_user
  		session[:user_id] = authorized_user.id
      #render :json => authorized_user
      #respond_with(authorized_user)
      p session[:user_id]
      respond_to do |format|
        format.json { render json: authorized_user }
      end
  		#flash[:notice] = "Welcome, You logged in as #{authorized_user.username}"
  		#redirect_to activities_url(session[:user_id])
  	else
  		flash[:notice] = "Invalid Username or Password"
  		flash[:color] = "Invalid"
  		render "login"
  	end
  end

  def home
  end

  def profile
  end

  def setting
  end

  def logout
  	session[:user_id] = nil
  	redirect_to :action => 'login'
  end
end
