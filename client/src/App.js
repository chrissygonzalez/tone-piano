import React, { Component } from 'react';
import './App.css';
import Test from './test';
import Tone from 'tone';
import PianoContainer from './containers/PianoContainer';

class App extends Component {
  constructor(props){
    super(props);
  }

  playSong = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel(0);

    let synth = new Tone.Synth().toMaster();
    let counter = 0;
    new Tone.Part(function(time, value){
      Tone.Draw.schedule(function(){
        // gross temporary animation
        let notes = document.getElementsByClassName('song');
        let notesArr = Array.from(notes);
        notesArr.map(note => note.style.backgroundColor = '#fff');

        let note = document.getElementById(counter)
        note.style.backgroundColor = 'yellow';
        counter += 1;
      }, time)

      synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
    }, this.state.song).start(0);

    Tone.Transport.start("+0.1");
  }

  render() {
    Test.getSongs();
    const inlineBlock = {display: 'inline-block', padding: '5px'}

    return (
      <div className="App">
        <button onClick={this.playSong}>Play Song</button>
        <div>{this.state.song.map((note, index) => <div key={index} id={index} className="song" style={inlineBlock}>{note.note}</div>)}</div>
        <PianoContainer />
      </div>
    );
  }
}

export default App;
