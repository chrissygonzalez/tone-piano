import React from 'react';
import Note from '../components/Note';
import SongForm from '../components/SongForm';

const SongControls = (props) => {
    const inlineBlock = {display: 'inline-block', padding: '5px'}
    return (
        <div className="songControls">
            {props.editable ? (
                <SongForm onChange={event => {props.handleChange(event)}} title={props.showSong.title} musician_name={props.showSong.musician_name} />
            ) : (
                <h2>{props.showSong.title} by {props.showSong.musician_name}</h2>
            )}
    
            <button onClick={() => {props.playSong(props.showSong.notes)}}>Play Song</button>
            {props.editable && 
            <>
                <button onClick={props.clearNotes}>Clear Notes</button>
                <button onClick={props.saveSong}>Save Song</button>
            </>
            }
            <div>{props.showSong.notes.map((note, index) => {
                return <Note key={index} index={'note-' + index} style={inlineBlock} note={note}/>})}
            </div>
        </div>
    )
}

export default SongControls;