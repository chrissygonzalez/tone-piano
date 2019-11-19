import React, { Component } from 'react';
import SongControls from '../containers/SongControls';
import Piano from '../containers/Piano';
import { connect } from 'react-redux';
import { postSong } from '../actions/postSong';
import { playTone, playSong } from '../tone/SongFunctions';

class SongView extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: "",
        musician_name: "",
        notes: []
      }
    }

    handleAddNote = (note) => {
      playTone(note);
      if (this.state.notes.length > 0) {
        const lastSongTime = this.state.notes[this.state.notes.length - 1].time;
        this.setState({
            ...this.state,
            notes: [...this.state.notes, { time: lastSongTime + 0.5, note: note }]
        })
      } else {
          this.setState({ 
            ...this.state,
            notes: [{ time: 0, note: note }] 
          });
      }
    }

    handleSave = () => {
      const songObject = {
        title: this.state.title,
        musician_name: this.state.musician_name,
        notes_attributes: this.state.notes
      }
      this.props.postSong(songObject);
      this.clearSong();
    }

    handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
    }

    clearNotes = () => {
      this.setState({
        ...this.state,
        notes: []
      })
    }

    clearSong = () => {
      this.setState({
        title: "",
        musician_name: "",
        notes: []
      })
    }

    render(){
      return (
        <div className="text-center">
            {this.props.newSong ? (
              <>
                <Piano saveNote={this.handleAddNote} />
                <SongControls 
                  editable={true} 
                  songState={this.state} 
                  handleChange={this.handleChange}
                  clearNotes={this.clearNotes} 
                  playSong={playSong} 
                  saveSong={this.handleSave} 
                  newSong={this.props.newSong}
                  />
              </>
            ) : (
                <SongControls 
                    editable={false} 
                    id={this.props.match.params.id}
                    playSong={playSong} 
                     />
              )}
        </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
      postSong: (songObject) => dispatch(postSong(songObject)),
      loadSavedSong: (notes) => dispatch({type: 'LOAD_SAVED_SONG', notes: notes})
  };
};

export default connect(null, mapDispatchToProps)(SongView);