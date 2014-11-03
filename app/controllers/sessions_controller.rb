class SessionsController < ApplicationController
  before_filter :authenticate_user, :only => [:home, :profile, :setting]
  before_filter :save_login_state, :only => [:login, :login_attempt]
  respond_to :html, :xml, :json
  def login
  end

  def login_attempt
  	@authorized_user = User.authenticate(params[:username], params[:password])
  	if @authorized_user
  		session[:user_id] = @authorized_user.id
      respond_to do |format|
        format.json { render "login_attempt.json" }
      end
  	else
      respond_to do |format|
  		render "login"
  	  end
    end
  end

  def home
    @activities = Activity.all
    respond_to do |format|
      format.json { render "home.json" }
    end
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
