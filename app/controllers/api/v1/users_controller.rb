module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!

      def index
        render json: current_user.as_json(only: %i[id username email admin])
      end
    end
  end
end
