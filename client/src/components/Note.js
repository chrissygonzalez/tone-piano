import React from 'react';
import QuarterNote from '../svgs/QuarterNote';
import QuarterNoteDown from '../svgs/QuarterNoteDown';

const Note = (props) => {
    const styles = `${props.noteAppearance.style} song flex`;
    // const 
        return (
        <div key={props.index} id={props.index} className={styles}>
            {props.noteAppearance.shape}
            {/* <QuarterNote width={50}/> */}
            {/* {props.note.note} */}
        </div>
    )
}

export default Note;