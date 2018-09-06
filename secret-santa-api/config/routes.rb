Rails.application.routes.draw do

  scope '/api' do
  	post 'user_token' => 'user_token#create'
  	resources :users, only: [] do
  		resources :wishes, only: [:index]
  	end
  end
end
