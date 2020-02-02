import React from 'react';
import Note from '../components/Note';
import QuarterNote from '../svgs/QuarterNote';
import QuarterNoteDown from '../svgs/QuarterNoteDown';
import MiddleC from '../svgs/MiddleC';
import TrebleClef from '../svgs/TrebleClef';

const SongNotes = (props) => {
    if (props.notes.length) {
        return (
            <div className="flex">
                <div className="treble-clef">
                    <TrebleClef width={60} fill={'#E5C229'} />
                </div>
                <div className="flex note-container">
                    {props.notes.map((note, index) => {
                        return <Note key={index} index={'note-' + index} note={note} noteAppearance={noteMap[note.note]}/>
                    })}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

const noteMap = {  
    'C4': {style: 'c4', shape: <MiddleC width={50} />},  
    'D4': {style: 'd4', shape: <QuarterNote width={50} />},  
    'E4': {style: 'e4', shape: <QuarterNote width={50} />},
    'F4': {style: 'f4', shape: <QuarterNote width={50} />},
    'G4': {style: 'g4', shape: <QuarterNote width={50} />},
    'A4': {style: 'a4', shape: <QuarterNote width={50} />},
    'B4': {style: 'b4', shape: <QuarterNoteDown width={50} />},
    'C5': {style: 'c5', shape: <QuarterNoteDown width={50} />}
  };

export default SongNotes;