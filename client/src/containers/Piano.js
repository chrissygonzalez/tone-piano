import React from 'react';

const Piano = (props) => {
    return (
        <div className="piano">
            <button onClick={() => props.saveNote('C4')}>C</button>
            <button onClick={() => props.saveNote('D4')}>D</button>
            <button onClick={() => props.saveNote('E4')}>E</button>
            <button onClick={() => props.saveNote('F4')}>F</button>
            <button onClick={() => props.saveNote('G4')}>G</button>
            <button onClick={() => props.saveNote('A4')}>A</button>
            <button onClick={() => props.saveNote('B4')}>B</button>
            <button onClick={() => props.saveNote('C5')}>C</button>
        </div>
    )
}

export default Piano;