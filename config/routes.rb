Rails.application.routes.draw do
  devise_for :users
  get 'landing/index'
  get '/index', to: 'landing#index', as: 'index'
  # For details on the DSL available within this file, see
  # https://guides.rubyonrails.org/routing.html
  # root 'landing#index'
  root 'landing#app'
  match '*path', to: 'landing#app', via: :all
  #match '*path', to: 'landing#index', via: :all
end
