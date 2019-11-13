import React from 'react';

const SongView = (props) => {
    const songs = props.songs;
    const id = props.match.params.id - 1;
  return (
    <div>
        Song View!
        {songs[id] ? songs[id].title : null}
    </div>
  );
};

export default SongView;