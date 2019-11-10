# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
song_a = Song.create(title: 'Jingle Bells', musician_name: 'Jack Frost')
song_b = Song.create(title: 'Puff the Magic Dragon', musician_name: 'Little Jackie Paper')
song_c = Song.create(title: 'This Song', musician_name: 'This Artist')

note_a = Note.create(note: 'C4', time: '4n')
note_b = Note.create(note: 'D4', time: '4n')
note_c = Note.create(note: 'E4', time: '4n')

song_note_a = SongNote.create(song: song_a, note: note_a, time: '0:0')
song_note_b = SongNote.create(song: song_a, note: note_b, time: '0:1')
song_note_c = SongNote.create(song: song_a, note: note_c, time: '0:2')