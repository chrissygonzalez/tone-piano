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
        editable: true,
        notes: []
      }
    }

    componentDidMount = () => {
        if (!this.props.newSong) {
            const songs = this.props.songs;
            const id = this.props.match.params.id - 1;

            if (songs[id]) {
                this.setState({
                    title: songs[id].title,
                    musician_name: songs[id].musician_name,
                    notes: songs[id].notes,
                    editable: false
                })
            }
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
        console.log(this.props.songs);
      return (
        <div className="text-center">
            {this.props.newSong ? (
              <>
              New Song!
                <Piano saveNote={this.handleAddNote} />
                <SongControls 
                  showSong={this.state} 
                  editable={true} 
                  handleChange={this.handleChange}
                  clearNotes={this.clearNotes} 
                  playSong={playSong} 
                  saveSong={this.handleSave} 
                  />
              </>
            ) : (
              <>
                Song View!
                <SongControls showSong={this.state} editable={false} playSong={playSong} song={this.props.songs[this.props.match.params.id - 1]} />
              </>
              )}
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
      postSong: (songObject) => dispatch(postSong(songObject)),
      loadSavedSong: (notes) => dispatch({type: 'LOAD_SAVED_SONG', notes: notes})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongView);