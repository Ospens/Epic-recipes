class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def home
    render 'layouts/application'
  end

  def sports
    render 'layouts/application'
  end

  def registration
    render 'layouts/application'
  end
  
end
