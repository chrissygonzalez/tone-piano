class AddTimeToSongNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :song_notes, :time, :string
  end
end
