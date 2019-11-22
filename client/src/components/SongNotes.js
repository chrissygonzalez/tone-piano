import React from 'react';
import Note from '../components/Note';

const SongNotes = (props) => {
        return (
        <div className="flex light-shade note-container">
            {props.notes.map((note, index) => {
                return <Note key={index} index={'note-' + index} note={note} className={placeNote(note)}/>
            })}
        </div>
    )
}

const placeNote = (note) => {
    switch (note.note) {
        case 'C4':
            return 'mt-70';
        case 'D4':
            return 'mt-60';
        case 'E4':
            return 'mt-50';
        case 'F4':
            return 'mt-40';
        case 'G4':
            return 'mt-30';
        case 'A4':
            return 'mt-20';
        case 'B4':
            return 'mt-10';
        case 'C5':
            return 'mt-0';
        default:
            return null;
    }
}

export default SongNotes;