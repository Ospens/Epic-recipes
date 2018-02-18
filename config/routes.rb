Rails.application.routes.draw do
  
  root 'application#home'

  get "sports" => "application#sports"

end
