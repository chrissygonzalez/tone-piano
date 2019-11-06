import React, { Component } from 'react';
import './App.css';
import Test from './test';
import Tone from 'tone';
import PianoContainer from './containers/PianoContainer';
import SongContainer from './containers/SongContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      song: []
    }
  }

  saveNote = (note) => {
    console.log(note);
  }

  render() {
    Test.getSongs();

    return (
      <div className="App">
        <SongContainer song={this.state.song}/>
        <PianoContainer song={this.state.song} saveNote={this.saveNote} />
      </div>
    );
  }
}

export default App;
