import React from 'react';
import { Link } from 'react-router-dom';

const SongThumb = (props) => {
  return (
    <li key={props.song.id} className="song-thumb">
        <Link to={`/songs/${props.song.id}`}>
          <span className="song-title">{props.song.title}</span>
          <p>by {props.song.musician_name}</p>
          </Link>
    </li>
  );
};

export default SongThumb;