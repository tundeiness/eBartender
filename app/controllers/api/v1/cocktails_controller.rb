module Api
  module V1
    class CocktailsController < ApplicationController
      before_action :authenticate_user!
      before_action :require_admin!, only: [:create]
      before_action :set_cocktail, only: %i[show favourite]

      def index
        render json: { status: 'SUCCESS', message: 'Loaded all Cocktails', data: Cocktail.all }, status: :ok
      end

      def show
        render json: { status: 'SUCCESS', message: 'Showing Cocktail', data: @cocktail }, status: :ok
      end

      def create
        @cocktail = Cocktail.new(cocktail_params)
        if @cocktail.save
          render json: { status: 'SUCCESS', message: 'Cocktail created', data: @cocktail }, status: :created
        else
          render json: { status: 'ERROR', errors: @cocktail.errors.full_messages }, status: :unprocessable_entity
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
