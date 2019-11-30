import React from 'react';
import Note from '../components/Note';
import QuarterNote from '../svgs/QuarterNote';
import QuarterNoteDown from '../svgs/QuarterNoteDown';

const SongNotes = (props) => {
        return (
        <div className="flex note-container">
            {props.notes.map((note, index) => {
                return <Note key={index} index={'note-' + index} note={note} noteAppearance={placeNote(note)}/>
            })}
        </div>
    )
}

const placeNote = (note) => {
    switch (note.note) {
        case 'C4':
            return {style: 'c4', shape: <QuarterNote width={50} />};
        case 'D4':
            return {style: 'd4', shape:  <QuarterNote width={50} />};
        case 'E4':
            return {style: 'e4', shape:  <QuarterNote width={50} />};
        case 'F4':
            return {style: 'f4', shape:  <QuarterNote width={50} />};
        case 'G4':
            return {style: 'g4', shape:  <QuarterNote width={50} />};
        case 'A4':
            return {style: 'a4', shape:  <QuarterNote width={50} />};
        case 'B4':
            return {style: 'b4', shape:  <QuarterNoteDown width={50} />};
        case 'C5':
            return {style: 'c5', shape:  <QuarterNoteDown width={50} />};
        default:
            return null;
    }
}

export default SongNotes;