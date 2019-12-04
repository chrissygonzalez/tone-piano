## Tone Piano

Tone Piano is a little Javascript piano built with a React front end, a Ruby on Rails backend, and [Tone.js](https://tonejs.github.io/).

![Tone Piano](https://i.imgur.com/hfANoZy.gif)

### How to Use

Tone Piano was built on Ruby 2.6.1 and uses npm to install node modules. You'll probably need a similar set-up to get it to run correctly. 

#### Installation

1. First, clone or download this repo.
2.  `cd` into the `tone-piano/client` directory and run `npm install` to install all the required module.
3. `cd ..` once they're installed to get back into the `tone-piano` directory.
4. Enter `rake db:migrate` to run the database migrations.
5. Enter `rake db:seed` to install a few sample songs.
6. Start the application by entering `rake start`. Your browser should open on its own, but if not, navigate to `localhost:3000` to see it running.

#### Using the app

1. On the homepage, choose 'Browse songs' or 'Play piano'.
2. **Browse songs**: Click on a song to get to its view, and click the Play Song button to hear it.
3. **Play piano**: Click on the keyboard keys (sadly, no sharps or flats yet) to compose a tune. Add a title, your name, and save or clear the notes as you like.