module Api
  module V1
    class FavouritesDashboardController < ApplicationController
      def index
        if user_signed_in?
          render json: {message: 'Loading all your favourite Cocktails', data: current_user.favourites}, status: :ok
        else
          render json: { errors: ['Not authenticated'] }, status: :unauthorized
        end
      end

    end
  end
end
