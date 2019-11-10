import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSong } from '../actions/postSong'
import Tone from 'tone';
import Note from '../components/Note';

class SongContainer extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            musician_name: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave = () => {
        const songObject = {...this.state, notes_attributes: this.props.song}
        // console.log(songObject);
        this.props.postSong(songObject);
      }

    playSong = () => {
        Tone.Transport.stop();
        Tone.Transport.cancel(0);
    
        let synth = new Tone.Synth().toMaster();
        let counter = 0;

        this.resetNoteStyles();

        new Tone.Part(function(time, value){
          Tone.Draw.schedule(function(){
            let playingNote = document.getElementById('note-' + counter);
            playingNote.classList.add('activeNote');
            counter += 1;
          }, time)
    
          synth.triggerAttackRelease(value.note, "8n", time);
        }, this.props.song).start(0);
    
        Tone.Transport.start("+0.1");
    }

    resetNoteStyles = () => {
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
                    <input name="title" type="text" onChange={ e => {this.handleChange(e)}}/>
                    <label htmlFor="musician_name">Your Name</label>
                    <input name="musician_name" type="text" onChange={ e => {this.handleChange(e)}} />
                    <input type="submit" value="Save" />
                </form>
                <button onClick={this.playSong}>Play Song</button>
                <button onClick={this.props.clearSong}>Clear Song</button>
                <button onClick={this.handleSave}>Save Song</button>
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
        clearSong: () => dispatch({ type: 'CLEAR_SONG' }),
        postSong: (songObject) => dispatch(postSong(songObject))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(SongContainer);