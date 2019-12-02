import React from 'react';

const SongForm = (props) => {
  return (
    <form className="song-form">
        <input name="title" type="text" onChange={ e => {props.onChange(e)}} value={props.title} placeholder="Song Title" /> by
        <input name="musician_name" type="text" onChange={ e => {props.onChange(e)}} value={props.musician_name} placeholder="Your Name" />
    </form>
  );
};

export default SongForm;