import React, { Component } from 'react';
import SongControls from '../components/SongControls';
import Piano from '../components/Piano';
import SongNotes from '../components/SongNotes';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/fetchSongs'
import { postSong } from '../actions/postSong';
import { playTone, playSong } from '../tone/SongFunctions';
import { Redirect } from 'react-router-dom';

class SongView extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: "Untitled Song",
        musician_name: "Anonymous",
        notes: [],
        redirectToList: this.props.redirectToList
      }
    }

    componentDidMount() {
      this.props.fetchSongs();
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
      this.setState({
          ...this.state,
          redirectToList: true
      })
    }

    handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
    }

    handleClearNotes = () => {
      this.setState({
        ...this.state,
        notes: []
      })
    }

    render(){
      const findThisSong = song => song.id.toString() === this.props.match.params.id
      const thisSong = this.props.match ? this.props.songs.find(findThisSong) : null;

      if (this.state.redirectToList === true) {
        return <Redirect to='/songs' />
      } else if (this.props.newSong) {
        return (
            <>
              <Piano saveNote={this.handleAddNote} handleKey={this.handleKey}/>
              <div className="song-grid">
                  <div className="song-controls-grid">
                    <div className="song-controls">
                        <SongControls 
                          editable={true} 
                          songState={this.state} 
                          handleChange={this.handleChange}
                          clearNotes={this.handleClearNotes} 
                          playSong={playSong} 
                          saveSong={this.handleSave} 
                        />
                      <SongNotes notes={this.state.notes} />
                      </div>
                  </div>
              </div>
            </>
        )
      } else if (thisSong) {
        return (
            <div className="song-grid">
                <div className="song-controls-grid">
                  <div className="song-controls">
                      <SongControls 
                        editable={false} 
                        notes={thisSong.notes}
                        title={thisSong.title}
                        musician={thisSong.musician_name}
                        playSong={playSong} 
                      />
                      <SongNotes notes={thisSong.notes} />
                  </div>
                </div>
            </div>
        )
      } else {
        return (
          <h2>Loading...</h2>
        )
      }
    }
}

const mapStateToProps = state => {
  return {
      songs: state.songs
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchSongs: () => dispatch(fetchSongs()),
      postSong: (songObject) => dispatch(postSong(songObject))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongView);