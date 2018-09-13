class UsersController < ApplicationController
	before_action :authenticate_user

	def welcome
		user = current_user
		render json: user
	end

end