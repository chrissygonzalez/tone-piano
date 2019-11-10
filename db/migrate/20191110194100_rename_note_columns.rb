class RenameNoteColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :notes, :tone, :note
    rename_column :notes, :duration, :time
  end
end
