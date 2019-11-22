import React from 'react';
import QuarterNote from '../svgs/QuarterNote';

const Note = (props) => {
    const styles = `${props.className} song flex`
        return (
        <div key={props.index} id={props.index} className={styles}>
            <QuarterNote width={30}/>
            {/* {props.note.note} */}
        </div>
    )
}

export default Note;