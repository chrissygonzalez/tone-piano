import React from 'react';
import SongControls from '../containers/SongControls';
import Piano from '../containers/Piano';

const SongView = (props) => {
    if (!props.newSong) {
      var songs = props.songs;
      var id = props.match.params.id - 1;
    }
  return (
    <div className="text-center">
        {props.newSong ? (
          <>
          New Song!
            <Piano />
            <SongControls />
          </>
        ) : (
          <>
            Song View!
            <SongControls savedSong={songs[id]} />
          </>
          )}
    </div>
  );
};

export default SongView;