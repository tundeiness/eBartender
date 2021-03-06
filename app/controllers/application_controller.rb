class ApplicationController < ActionController::Base
  before_action :configure_permitted_params, if: :devise_controller?

  def configure_permitted_params
    devise_parameter_sanitizer.permit(:sign_in,  keys: [:username])
    devise_parameter_sanitizer.permit(:sign_up,  keys: [:username])
    devise_parameter_sanitizer.permit(:account_update,  keys: [:username])
  end
end
