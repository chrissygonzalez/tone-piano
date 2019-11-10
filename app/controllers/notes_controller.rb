class NotesController < ApplicationController
    def show
        this_note = Note.find_by(id: params[:id])
        render json: this_note
    end

    def create
        Note.create(note_params)
    end

    private

    def note_params
        params.permit(:note, :time)
    end
end