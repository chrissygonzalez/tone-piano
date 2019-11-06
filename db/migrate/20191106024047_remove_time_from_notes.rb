class RemoveTimeFromNotes < ActiveRecord::Migration[5.2]
  def change
    change_table :notes do |t|
      t.remove :time
    end
  end
end
