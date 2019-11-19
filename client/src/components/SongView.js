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
        console.log(note);
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

    handleKey = (e) => {
        switch (e.key) {
            case "1":
                this.handleAddNote("C4");
                break;
            case "2":
                this.handleAddNote("D4");
                break;
            case "3":
                this.handleAddNote("E4");
                break;
            case "4":
                this.handleAddNote("F4");
                break;
            case "5":
                this.handleAddNote("G4");
                break;
            case "6":
                this.handleAddNote("A4");
                break;
            case "7":
                this.handleAddNote("B4");
                break;
            case "8":
                this.handleAddNote("C5");
                break;
            default:
                return;
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
        <div className="flex-center">
            {this.props.newSong ? (
              <div>
                <Piano saveNote={this.handleAddNote} handleKey={this.handleKey}/>
                <SongControls 
                  editable={true} 
                  songState={this.state} 
                  handleChange={this.handleChange}
                  clearNotes={this.clearNotes} 
                  playSong={playSong} 
                  saveSong={this.handleSave} 
                  newSong={this.props.newSong}
                  />
              </div>
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