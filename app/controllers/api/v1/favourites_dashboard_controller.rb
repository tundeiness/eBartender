module Api
  module V1
    class FavouritesDashboardController < ApplicationController
      def index
        if user_signed_in?
          render json: {message: 'Loading all your favourite Cocktails', data: current_user.favourites}, status: :ok
        else
          render json: {
            status: 500,
            errors: ['Not a single cocktail is found']
          }
        end
      end

    end
  end
end
