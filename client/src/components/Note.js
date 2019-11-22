import React from 'react';
import QuarterNote from '../svgs/QuarterNote';

const Note = (props) => {
        return (
        <div key={props.index} id={props.index} className="song flex flex-column">
            <QuarterNote width={30}/>
            {props.note.note}
        </div>
    )
}

export default Note;