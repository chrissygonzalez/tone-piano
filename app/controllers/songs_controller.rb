class SongsController < ApplicationController
    def index
        songs = Song.all
        render json: songs, include: [:notes]
    end

    def new

    end

    def create
        song = Song.create(song_params)
        render json: {title: song.title, musician_name: song.musician_name}
    end

    def show
        # song = Song.find_by(id: params[:id])
        # render json: song, include: [:notes]
    end

    private
    
    def song_params
        params.require(:song).permit(:title, :musician_name,
        notes_attributes: [:note, :time])
    end
end