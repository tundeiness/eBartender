Rails.application.routes.draw do
  devise_for :users
   get 'landing/index'
   get '/index', to: 'landing#index', as: 'index'
  # For details on the DSL available within this file, see
  # https://guides.rubyonrails.org/routing.html
  # root 'landing#index'

  namespace :api do
    namespace :v1 do
      resources :cocktails do
        put :favourite, on: :member
      end

      resources :favourite_cocktails, only: %i[create destroy]
      resources :favourite_dashboards, only: %i[index]
    end
  end

  root 'landing#app'
  # root 'landing#index'
  match '*path', to: 'landing#app', via: :all
  # match '*path', to: 'landing#index', via: :all
end
