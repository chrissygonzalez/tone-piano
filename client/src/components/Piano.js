import React from 'react';
import PianoKey from './PianoKey';

const Piano = (props) => {
    return (
        <ul className="piano flex-center" onKeyDown={e => props.handleKey(e)}>
            <PianoKey saveNote={() => props.saveNote('C4')} index={1} hasBlackKey /> 
            <PianoKey saveNote={() => props.saveNote('D4')} index={2} hasBlackKey />
            <PianoKey saveNote={() => props.saveNote('E4')} index={3} />
            <PianoKey saveNote={() => props.saveNote('F4')} index={4} hasBlackKey /> 
            <PianoKey saveNote={() => props.saveNote('G4')} index={5} hasBlackKey />
            <PianoKey saveNote={() => props.saveNote('A4')} index={6} hasBlackKey />
            <PianoKey saveNote={() => props.saveNote('B4')} index={7} />
            <PianoKey saveNote={() => props.saveNote('C5')} index={8} />
        </ul>
    )
}

export default Piano;