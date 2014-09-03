class UsersController < ApplicationController
	before_filter :save_login_state, :only => [:new, :create]

	def new
		@user = User.new
	end

	def create
		p "create action"
		@user = User.new(user_params)
		if @user.save
			flash[:notice] = "User saved successfully"
			flash[:color] = "valid"
			redirect_to root_url
		else
			flash[:notice] = "Form is invalid"
			flash[:color] = "invalid"
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :email, :password, :password_confirmation)
	end
end
