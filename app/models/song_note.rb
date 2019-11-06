class SongNote < ActiveRecord::Base
    belongs_to :song
    belongs_to :note
    accepts_nested_attributes_for  :note
end