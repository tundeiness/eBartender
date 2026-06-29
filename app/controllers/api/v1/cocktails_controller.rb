module Api
  module V1
    class CocktailsController < ApplicationController
      before_action :set_cocktail, only: %i[show favourite]

        # GET /cocktails
      def index
        @cocktails = Cocktail.all
        if @cocktails && user_signed_in?
          render json: {status: 'SUCCESS', message: 'Loaded all Cocktails', data: @cocktails}, status: :ok
        else
          render json: {}, status: 401
        end
      end

      def show
        # cocktail = Cocktail.find(params[:id])
        if @cocktail && user_signed_in?
          render json: {status: 'SUCCESS', message: 'Showing Cocktail', data: @cocktail}, status: :ok
        else
          render json: {
            status: 500,
            errors: ['cocktail not found']
          }
        end
      end

      def favourite
        type = params[:type]
        if type == 'favourite'
          current_user.favourite_cocktails << @cocktail
          render json: { status: 'SUCCESS', message: "You favourited #{@cocktail.name}" }, status: :ok

        elsif type == 'unfavourite'
          current_user.favourite_cocktails.delete(@cocktail)
          render json: { status: 'SUCCESS', message: "Unfavourited #{@cocktail.name}" }, status: :ok

        else
          render json: { status: 'ERROR', errors: ['Nothing happened.'] }, status: :unprocessable_entity
        end
      end

      private

      def cocktail_params
        # whitelist params
        params.permit(:name, :description, :ingredients, :image)
      end

      def set_cocktail
        @cocktail = Cocktail.find(params[:id])
      end
    end
  end
end
