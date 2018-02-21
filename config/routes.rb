Rails.application.routes.draw do
  
  devise_for :users
  root 'application#home'

  get "sports" => "application#sports"

  get "register" => "application#register"

  get "login" => "application#login"
  

end
