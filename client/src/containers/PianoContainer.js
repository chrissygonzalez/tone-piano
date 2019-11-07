import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tone from 'tone';

class PianoContainer extends Component {
    handleNote = (note) => {
        this.playTone(note);
        this.props.addNote(note);
    }

    playTone = (note) => {
        let synth = new Tone.Synth().toMaster();
        synth.triggerAttackRelease(note, "8n");
    }

    render() {
        return (
            <div className="piano">
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
   
const mapDispatchToProps = dispatch => {
    return {
        addNote: (note) => dispatch({ type: 'ADD_NOTE', note: note })
    };
};

export default connect( null, mapDispatchToProps )(PianoContainer);