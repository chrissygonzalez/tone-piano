import React, { Component } from 'react';
import Note from '../components/Note';
import SongForm from '../components/SongForm';

class SongControls extends Component {
    componentDidUpdate = () => {
        // this.props.loadSongs()
        // console.log(this.props.song)
    }

    inlineBlock = {display: 'inline-block', padding: '5px'}

    render(){
        return (
            <div className="songControls">
                {this.props.editable ? (
                    <SongForm onChange={event => {this.props.handleChange(event)}} title={this.props.showSong.title} musician_name={this.props.showSong.musician_name} />
                ) : (
                    <h2>{this.props.showSong.title} by {this.props.showSong.musician_name}</h2>
                )}
        
                <button onClick={() => {this.props.playSong(this.props.showSong.notes)}}>Play Song</button>
                {this.props.editable && 
                <>
                    <button onClick={this.props.clearNotes}>Clear Notes</button>
                    <button onClick={this.props.saveSong}>Save Song</button>
                </>
                }
                <div>{this.props.showSong.notes.map((note, index) => {
                    return <Note key={index} index={'note-' + index} style={this.inlineBlock} note={note}/>})}
                </div>
            </div>
        )
    }
}

export default SongControls;