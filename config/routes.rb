Rails.application.routes.draw do
  devise_for :users
  get 'landing/index'
  # get '/app', to: 'landing#app', as: 'app'
  # For details on the DSL available within this file, see
  # https://guides.rubyonrails.org/routing.html
  root 'landing#index'
  match '*path', to: 'landing#index', via: :all
end
