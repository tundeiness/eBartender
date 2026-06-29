module Api
  module V1
    class UsersController < ApplicationController
      def index
        render json: current_user.as_json(only: %i[id username email])
      end
    end
  end
end
