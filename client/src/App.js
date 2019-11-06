import React, { Component } from 'react';
import './App.css';
import Test from './test';
import PianoContainer from './containers/PianoContainer';
import SongContainer from './containers/SongContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      song: []
    }
  }

  beats = ['0', '0:1', '0:2', '0:3', '1:0', '1:1', '1:2', '1:3', '2:0', '2:1', '2:2', '2:3', '3:0', '3:1', '3:2', '3:3'];

  // saveNote = (note) => {
  //   // console.log(note);
  //   this.setState({
  //     ...this.state,
  //     song: [...this.state.song, { time: this.beats[this.state.song.length], note: note }]
  //   });
  // }

  clearSong = () => {
    this.setState({
      song: []
    })
  }

  render() {
    Test.getSongs();

    return (
      <div className="App">
        <SongContainer />
        <PianoContainer />
      </div>
    );
  }
}

export default App;
