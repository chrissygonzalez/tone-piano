import React, { Component } from 'react';
import QuarterNote from '../svgs/QuarterNote';

class Note extends Component {
    render() {
        return (
        <div id={this.props.index} className="song" style={this.props.style}>
            {this.props.note.note}
            <QuarterNote />
        </div>
    )}
}

export default Note;