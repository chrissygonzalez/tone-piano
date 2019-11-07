import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tone from 'tone';
import Note from '../components/Note';

class SongContainer extends Component {
    // refsCollection = {};

    playSong = () => {
        Tone.Transport.stop();
        Tone.Transport.cancel(0);
    
        let synth = new Tone.Synth().toMaster();
        let counter = 0;

        this.resetNotes();

        new Tone.Part(function(time, value){
          Tone.Draw.schedule(function(){
            let playingNote = document.getElementById('note-' + counter);
            playingNote.classList.add('activeNote');
            counter += 1;
          }, time)
    
          synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
        }, this.props.song).start(0);
    
        Tone.Transport.start("+0.1");
    }

    resetNotes = () => {
        let notes = document.getElementsByClassName('song');
        let notesArr = Array.from(notes);
        notesArr.map(note => note.classList.remove('activeNote'));
    }

    render() {
        const inlineBlock = {display: 'inline-block', padding: '5px'}
        return (
            <div className="songContainer">
                <form>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" /><br />
                    <label htmlFor="musician_name">Your Name</label>
                    <input name="musician_name" type="text" />
                    <input type="submit" value="Save" />
                </form>
                <button onClick={this.playSong}>Play Song</button>
                <button onClick={this.props.clearSong}>Clear Song</button>
                <div>{this.props.song.map((note, index) => {
                    return <Note key={index} index={'note-' + index} style={inlineBlock} note={note}/>})}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        song: state.song
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearSong: () => dispatch({ type: 'CLEAR_SONG' })
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(SongContainer);