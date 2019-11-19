import React from 'react';

const Piano = (props) => {
    return (
        <div className="piano">
            <button onClick={() => props.saveNote('C4')} onKeyDown={e => props.handleKey(e)}>C</button>
            <button onClick={() => props.saveNote('D4')} onKeyDown={e => props.handleKey(e)}>D</button>
            <button onClick={() => props.saveNote('E4')} onKeyDown={e => props.handleKey(e)}>E</button>
            <button onClick={() => props.saveNote('F4')} onKeyDown={e => props.handleKey(e)}>F</button>
            <button onClick={() => props.saveNote('G4')} onKeyDown={e => props.handleKey(e)}>G</button>
            <button onClick={() => props.saveNote('A4')} onKeyDown={e => props.handleKey(e)}>A</button>
            <button onClick={() => props.saveNote('B4')} onKeyDown={e => props.handleKey(e)}>B</button>
            <button onClick={() => props.saveNote('C5')} onKeyDown={e => props.handleKey(e)}>C</button>
        </div>
    )
}

export default Piano;

// document.addEventListener("keydown", e => {
//     // e object has the key property to tell which key was pressed
//     switch (e.key) {
//       case "d":
//         return synth.triggerAttack("C4");