Rails.application.routes.draw do
  
  devise_for :users
  root 'application#home'

  get "sports" => "application#sports"

  get "registration" => "application#registration"

end
