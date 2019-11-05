class SongNote < ActiveRecord::Base
    belongs_to :song
    belongs_to :note
end