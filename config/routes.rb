Rails.application.routes.draw do
  
  devise_for :users
  
  root 'application#home'

  get "sports" => "application#sports"

  get "register" => "authorization#register"

  get "login" => "authorization#login"
  

end
