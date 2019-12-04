import React from 'react';
import SongForm from './SongForm';

const SongControls = (props) => {
        if (!props.editable) {
            return (
                <div className="flex-column flex-center">
                    <h2 className="song-view-heading">{props.title} <span className="normal-weight"> by</span> {props.musician}</h2>
                    <button className="link-button" onClick={() => {props.playSong(props.notes)}}>Play Song</button>
                </div>
            )
        } else {
            return (
                <div className="flex-column flex-center">
                    <SongForm 
                        onChange={event => {props.handleChange(event)}} 
                        title={props.songState.title} 
                        musician_name={props.songState.musician_name} 
                        />
                    <div>
                        <button className="link-button" onClick={props.clearNotes}>Clear Notes</button>
                        <button className="link-button" onClick={props.saveSong}>Save Song</button>
                        <button className="link-button" onClick={() => {props.playSong(props.songState.notes)}}>Play Song</button>
                    </div>
                </div>
            )
        }
}

export default SongControls;