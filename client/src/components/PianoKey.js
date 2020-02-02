import React from 'react';

const PianoKey = (props) => {
    return (
        <li className="key" onClick={() => props.saveNote()} tabIndex={props.index}>{props.index}  
            {props.hasBlackKey && <div className="black-key"></div>}  
        </li> 
        )
    }
    
export default PianoKey;