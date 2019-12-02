import React from 'react';

const Note = (props) => {
    const styles = `${props.noteAppearance.style} song flex`;
        return (
        <div key={props.index} id={props.index} className={styles}>
            {props.noteAppearance.shape}
        </div>
    )
}

export default Note;