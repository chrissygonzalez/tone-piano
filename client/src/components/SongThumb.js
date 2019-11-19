import React from 'react';
import { Link } from 'react-router-dom';

const SongThumb = (props) => {
  return (
    <li key={props.song.id} className="song-thumb">
        <Link to={`/songs/${props.song.id}`}>{props.song.title} by {props.song.musician_name}</Link>
        <p>Notes: {props.song.notes ? props.song.notes.map(note => note.note) : null}</p>
    </li>
  );
};

export default SongThumb;