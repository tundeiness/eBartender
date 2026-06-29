class ApplicationController < ActionController::Base
  before_action :configure_permitted_params, if: :devise_controller?

  def configure_permitted_params
    devise_parameter_sanitizer.permit(:sign_in,  keys: [:username])
    devise_parameter_sanitizer.permit(:sign_up,  keys: [:username])
    devise_parameter_sanitizer.permit(:account_update,  keys: [:username])
  end

  # Return JSON 401 for API routes rather than redirecting to the sign-in page.
  def authenticate_user!(*args)
    if request.path.start_with?('/api/')
      render json: { error: 'Not authenticated' }, status: :unauthorized unless user_signed_in?
    else
      super
    end
  end
end
