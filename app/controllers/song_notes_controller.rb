class SongNotesController < ApplicationController
    def create
        SongNote.create(song_note_params)
    end

    private

    def song_note_params
        params.require(:song_note).permit(:song_id, :note_id, :time,
        note_attributes: [:tone, :duration])
    end
end