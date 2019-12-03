import React from 'react';

const SongForm = (props) => {
  return (
    <form className="song-view-heading">
        <input name="title" type="text" onChange={ e => {props.onChange(e)}} value={props.title} /> 
        <span className="song-form-by">by</span>
        <input name="musician_name" type="text" onChange={ e => {props.onChange(e)}} value={props.musician_name} />
    </form>
  );
};

export default SongForm;