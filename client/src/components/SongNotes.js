import React from 'react';
import Note from '../components/Note';

const SongNotes = (props) => {
        return (
        <div className="flex note-container">
            {props.notes.map((note, index) => {
                return <Note key={index} index={'note-' + index} note={note} className={placeNote(note)}/>
            })}
        </div>
    )
}

const placeNote = (note) => {
    switch (note.note) {
        case 'C4':
            return 'c4';
        case 'D4':
            return 'd4';
        case 'E4':
            return 'e4';
        case 'F4':
            return 'f4';
        case 'G4':
            return 'g4';
        case 'A4':
            return 'a4';
        case 'B4':
            return 'b4';
        case 'C5':
            return 'c5';
        default:
            return null;
    }
}

export default SongNotes;