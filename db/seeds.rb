# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
song_a = Song.create(title: 'Jingle Bells', musician_name: 'Jack Frost')
a1 = Note.create(note: 'E4', time: 0)
a2 = Note.create(note: 'E4', time: 0.5)
a3 = Note.create(note: 'E4', time: 1)
a4 = Note.create(note: 'E4', time: 1.5)
a5 = Note.create(note: 'E4', time: 2)
a6 = Note.create(note: 'E4', time: 2.5)
a7 = Note.create(note: 'E4', time: 3)
a8 = Note.create(note: 'G4', time: 3.5)
a9 = Note.create(note: 'C4', time: 4)
a10 = Note.create(note: 'D4', time: 4.5)
a11 = Note.create(note: 'E4', time: 5)
song_a.notes = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11]
song_a.save


song_b = Song.create(title: 'Mary Had a Little Lamb', musician_name: 'Miss Lamb')
b1 = Note.create(note: 'E4', time: 0)
b2 = Note.create(note: 'D4', time: 0.5)
b3 = Note.create(note: 'C4', time: 1)
b4 = Note.create(note: 'D4', time: 1.5)
b5 = Note.create(note: 'E4', time: 2)
b6 = Note.create(note: 'E4', time: 2.5)
b7 = Note.create(note: 'E4', time: 3)
b8 = Note.create(note: 'D4', time: 3.5)
b9 = Note.create(note: 'D4', time: 4)
b10 = Note.create(note: 'D4', time: 4.5)
b11 = Note.create(note: 'E4', time: 5)
b12 = Note.create(note: 'G4', time: 5.5)
b13 = Note.create(note: 'G4', time: 6)
song_b.notes = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13]
song_b.save

song_c = Song.create(title: 'Twinkle Twinkle Little Star', musician_name: 'Mister Star')
c1 = Note.create(note: 'C4', time: 0)
c2 = Note.create(note: 'C4', time: 0.5)
c3 = Note.create(note: 'G4', time: 1)
c4 = Note.create(note: 'G4', time: 1.5)
c5 = Note.create(note: 'A4', time: 2)
c6 = Note.create(note: 'A4', time: 2.5)
c7 = Note.create(note: 'G4', time: 3)
c8 = Note.create(note: 'F4', time: 3.5)
c9 = Note.create(note: 'F4', time: 4)
c10 = Note.create(note: 'E4', time: 4.5)
c11 = Note.create(note: 'E4', time: 5)
c12 = Note.create(note: 'D4', time: 5.5)
c13 = Note.create(note: 'D4', time: 6)
c14 = Note.create(note: 'C4', time: 6.5)
song_c.notes = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14]
song_c.save