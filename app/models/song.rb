class Song < ActiveRecord::Base
    has_many :song_notes
    has_many :notes, through: :song_notes
    accepts_nested_attributes_for :notes
end