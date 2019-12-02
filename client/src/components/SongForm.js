import React from 'react';

const SongForm = (props) => {
  return (
    <form>
        {/* <label htmlFor="title">Title</label> */}
        <input name="title" type="text" onChange={ e => {props.onChange(e)}} value={props.title} placeholder="Song Title" /> by
        {/* <label htmlFor="musician_name">Your Name</label> */}
        <input name="musician_name" type="text" onChange={ e => {props.onChange(e)}} value={props.musician_name} placeholder="Your Name" />
    </form>
  );
};

export default SongForm;