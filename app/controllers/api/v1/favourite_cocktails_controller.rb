module Api
  module V1
    class FavouriteCocktailsController < ApplicationController
      skip_before_action :verify_authenticity_token


      def index
        @favouritecocktail = current_user.cocktails

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
        if fav.save!
          render json: { message: 'created' }, status: :created
        else
          # render json: { message: 'can\'t create' }, status: 500
          render json: { errors: fav.errors.full_messages },
           status: :unprocessable_entity
        end
      end

      def destroy
        @favouritecocktail = current_user.favourite_cocktails.find_by!(cocktail_id: params[:id])
        if @favouritecocktail
          @favouritecocktail.destroy
          render json: @favouritecocktail, status: 204
        else
          render json: 'record no longer exist', status: 404
        end
      end

      private

      def favourite_params
        params.require(:favourite_cocktail).permit(:cocktail_id)
      end
    end
  end
end
