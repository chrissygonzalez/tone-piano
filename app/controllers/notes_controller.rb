class NotesController < ApplicationController
    def show
        note = Note.find_by(id: params[:id])
        render json: note
    end

    def create
        Note.create(note_params)
    end

    private

    def note_params
        params.require(:note).permit(:tone, :duration)
    end
end