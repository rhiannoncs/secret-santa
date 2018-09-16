Rails.application.routes.draw do

  scope '/api' do
  	post 'user_token' => 'user_token#create'
  	get '/users/welcome', to: 'users#welcome'
  	resources :users, only: [] do
  		resources :wishes, only: [:index, :create]
  	end
  end
end
