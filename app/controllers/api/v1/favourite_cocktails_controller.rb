module Api
  module V1
    class FavouriteCocktailsController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        @favouritecocktail = current_user.cocktails

        if user_signed_in? && @favouritecocktail
          render json: {status: 'SUCCESS', message: 'Loading all Favourite Cocktails', data: @favouritecocktail}, status: :ok
        else
          render json: {}, status: 401
        end
      end



      def create
        fav = current_user.favourite_cocktails.new(favourite_params)
        if fav.save!
          render json: 'created', status: :created
        else
          render json: 'can\'t create', status: 500
        end
      end



      def destroy
        @favouritecocktail = current_user.favourite_cocktails.find_by(cocktail_id: params[:id])
        @favouritecocktail.delete
      end

      private

      def favourited?
        FavouriteCocktail.where(user_id: current_user.id, cocktail_id:
        params[:cocktail_id]).exists?
      end

      def find_favourite
        @favouritecocktail = @cocktail.favouritecocktail.find(params[:id])
      end

      def favourite_params
        params.require(:favourite_cocktail).permit(:cocktail_id)
      end

    end
  end
end
