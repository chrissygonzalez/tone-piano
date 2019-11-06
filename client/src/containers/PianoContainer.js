import React, { Component } from 'react';
import Tone from 'tone';

class PianoContainer extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         song: []
    //       }
    // }

    beats = ['0', '0:1', '0:2', '0:3', '1:0', '1:1', '1:2', '1:3', '2:0', '2:1', '2:2', '2:3', '3:0', '3:1', '3:2', '3:3'];

    handleNote = (note) => {
        this.playTone(note);
        this.props.saveNote(note);
    }

    playTone = (note) => {
        let synth = new Tone.Synth().toMaster();
        synth.triggerAttackRelease(note, "8n");
    
        // this.setState({
        //   ...this.state,
        //   song: [...this.state.song, { time: this.beats[this.state.song.length], note: note }]
        // });
    
        // console.log(this.beats[this.state.song.length]);
    }

    render() {
        // console.log(this.props.quotes);
        return (
            <div>
                <button onClick={() => this.handleNote('C4')}>C</button>
                <button onClick={() => this.handleNote('D4')}>D</button>
                <button onClick={() => this.handleNote('E4')}>E</button>
                <button onClick={() => this.handleNote('F4')}>F</button>
                <button onClick={() => this.handleNote('G4')}>G</button>
                <button onClick={() => this.handleNote('A4')}>A</button>
                <button onClick={() => this.handleNote('B4')}>B</button>
                <button onClick={() => this.handleNote('C5')}>C</button>
            </div>
        )
    }
}

export default PianoContainer;