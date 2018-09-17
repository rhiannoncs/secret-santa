class ExchangesController < ApplicationController
	before_action :authenticate_user

	def create
		exchange_recipients = []
		params[:recipients].each do |recipient|
			Recipient.find_or_create_by(email: recipient.email) do |r|
				r.name = recipient.name
				exchange_recipients << r
			end
		end
		exchange = current_user.exchanges.build
		exchange.recipients += exchange_recipients
		render json: exchange
	end

	private

	def exchange_params
		params.require(:exchange).permit(:recipients => [:name, :email])
	end

end