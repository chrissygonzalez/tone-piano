class SongsController < ApplicationController
    def index
        songs = Song.all
        render json: songs
    end

    def new

    end

    def create
        song = Song.find_by title: params[:song][:title] ||= nil
        if song.nil?
            Song.create(song_params)
            render json: song.to_json
        else
            render json: {message: 'That song already exists.'}
        end
    end

    def show
        song = Song.find_by(id: params[:id])
        render json: song, include: [:notes, :song_notes]
    end

    private
    
    def song_params
        params.require(:song).permit(:title, :musician_name)
    end
end