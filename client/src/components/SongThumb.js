import React from 'react';
import { Link } from 'react-router-dom';

const SongThumb = (props) => {
    const songUrl = `/songs/${props.song.id}`
    // console.log(props.song);
  return (
    <li key={props.song.id}>
        <Link to={songUrl}>{props.song.title} by {props.song.musician_name}</Link>
        Notes: {props.song.notes ? props.song.notes.map(note => note.note) : null}
    </li>
  );
};

export default SongThumb;