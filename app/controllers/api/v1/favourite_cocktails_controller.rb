module Api
  module V1
    class FavouriteCocktailsController < ApplicationController
      before_action :authenticate_user!

      def index
        @favouritecocktail = current_user.favourites

        if user_signed_in? && @favouritecocktail
          render json: {status: 'SUCCESS', message: 'Loading all Favourite
          Cocktails', data: @favouritecocktail}, status: :ok

        else
          render json: {}, status: 401
        end
      end

      def create

        fav = FavouriteCocktail.new(favourite_params) do |curr|
          curr.user = current_user
        end

        # fav = current_user.favourite_cocktails.new(favourite_params)
        if fav.save
          render json: { message: 'created' }, status: :created
        else
          render json: { errors: fav.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @favouritecocktail = current_user.favourite_cocktails.find_by(cocktail_id: params[:id])
        if @favouritecocktail
          @favouritecocktail.destroy
          render json: @favouritecocktail, status: 204
        else
          render json: { error: 'record no longer exists' }, status: :not_found
        end
      end

      private

      def favourite_params
        params.require(:favourite_cocktail).permit(:cocktail_id)
      end
    end
  end
end
