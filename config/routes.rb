Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/api/songs/:id' => 'songs#delete_this_song'
  get '/api/songs' => 'songs#index'
  post '/api/songs' => 'songs#create'
  # get '/api/songs/:id' => 'songs#show'
  get '/api/song_notes/new' => 'songs#create'
end
