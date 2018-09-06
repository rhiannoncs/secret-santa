class WishesController < ApplicationController
	before_action :authenticate_user

	def index
		user = User.find(params[:user_id])
		wishes = user.wishes
		render json: wishes
	end

end