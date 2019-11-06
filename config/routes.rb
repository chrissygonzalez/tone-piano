Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/songs' => 'songs#index'
  get '/songs/new' => 'songs#create'
end
