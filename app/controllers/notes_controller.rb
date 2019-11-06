class NotesController < ApplicationController
    def show
        note = Note.find_by(id: params[:id])
        render json: note
    end
end