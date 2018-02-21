class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?
 
  skip_before_action :verify_authenticity_token

  # def angular
  #   render 'layouts/application'
  # end

  def home
    render 'layouts/application'
  end

  def sports
    render 'layouts/application'
  end

  protected
      def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
      end

  
end
