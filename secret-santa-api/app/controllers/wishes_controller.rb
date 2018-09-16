class WishesController < ApplicationController
	before_action :authenticate_user

	def index
		user = User.find(params[:user_id])
		wishes = user.wishes
		render json: wishes
	end

	def create
		user = User.find(params[:user_id])
		wish = user.wishes.build(wish_params)
		wish.save
		render json: wish
	end

	private

	def wish_params
		params.require(:wish).permit(:content, :user_id)
	end

end