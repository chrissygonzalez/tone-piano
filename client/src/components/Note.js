import React, { Component } from 'react';
import QuarterNote from '../svgs/QuarterNote';

class Note extends Component {
    render() {
        return (
        <div key={this.props.index} id={this.props.index} className="song flex flex-column">
            <QuarterNote width={30}/>
            {this.props.note.note}
        </div>
    )}
}

export default Note;