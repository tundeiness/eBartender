module Api
  module V1
    class FavouritesDashboardController < ApplicationController
      before_action :authenticate_user!

      def index
        render json: { message: 'Loading all your favourite Cocktails', data: current_user.favourites }, status: :ok
      end

    end
  end
end
