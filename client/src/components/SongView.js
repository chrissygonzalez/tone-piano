import React from 'react';
import SongControls from '../containers/SongControls';

const SongView = (props) => {
    const songs = props.songs;
    const id = props.match.params.id - 1;
  return (
    <div>
        Song View!
        {songs[id] ? <SongControls savedSong={songs[id]} /> : null}

    </div>
  );
};

export default SongView;