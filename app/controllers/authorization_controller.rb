class AuthorizationController < ApplicationController

  protect_from_forgery with: :exception
  # protect_from_forgery prepend: true

  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?

    def register
        render 'layouts/authorization'
      end
    
      def login
        render 'layouts/authorization'
      end
    
      protected
      def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
      end
end
