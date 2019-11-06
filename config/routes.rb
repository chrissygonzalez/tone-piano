Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/api/songs' => 'songs#index'
  get '/api/songs/:id' => 'songs#show'
  get '/api/songs/new' => 'songs#create'
  get '/api/song_notes/new' => 'songs#create'
end
