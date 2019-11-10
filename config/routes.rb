Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/api/songs' => 'songs#index'
  post '/api/songs' => 'songs#create'
  get '/api/songs/:id' => 'songs#show'
  get '/api/song_notes/new' => 'songs#create'
end
