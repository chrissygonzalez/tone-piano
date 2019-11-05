class Note < ActiveRecord::Base
    has_many :song_notes
    has_many :songs, through: :song_notes
end