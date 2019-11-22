import React from 'react';

const Piano = (props) => {
    return (
        <ul className="piano flex-center" onKeyDown={e => props.handleKey(e)}>
            <li className="key" onClick={() => props.saveNote('C4')} tabIndex={1}>1
                <div className="black-key"></div>
            </li>
            <li className="key" onClick={() => props.saveNote('D4')} tabIndex={2}>2
                <div className="black-key"></div>
            </li>
            <li className="key" onClick={() => props.saveNote('E4')} tabIndex={3}>3</li>
            <li className="key" onClick={() => props.saveNote('F4')} tabIndex={4}>4
                <div className="black-key"></div>
            </li>
            <li className="key" onClick={() => props.saveNote('G4')} tabIndex={5}>5
                <div className="black-key"></div>
            </li>
            <li className="key" onClick={() => props.saveNote('A4')} tabIndex={6}>6
                <div className="black-key"></div>
            </li>
            <li className="key" onClick={() => props.saveNote('B4')} tabIndex={7}>7</li>
            <li className="key" onClick={() => props.saveNote('C5')} tabIndex={8}>8</li>
        </ul>
    )
}

export default Piano;