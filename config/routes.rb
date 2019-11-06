Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/songs' => 'songs#index'
  get '/songs/:id' => 'songs#show'
  get '/songs/new' => 'songs#create'
  get '/song_notes/new' => 'songs#create'
end
