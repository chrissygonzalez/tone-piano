class CreateSongNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :song_notes do |t|
      t.integer :song_id
      t.integer :note_id
    end
  end
end
