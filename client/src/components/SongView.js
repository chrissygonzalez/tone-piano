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
            <SongControls showSong={null} editable={true} />
          </>
        ) : (
          <>
            Song View!
            <SongControls showSong={songs[id]} editable={false} />
          </>
          )}
    </div>
  );
};

export default SongView;