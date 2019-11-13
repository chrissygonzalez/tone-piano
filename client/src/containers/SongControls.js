import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSong } from '../actions/postSong'
import Note from '../components/Note';
import { playSong } from '../tone/SongFunctions';

class SongControls extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            musician_name: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSave = () => {
        const songObject = {...this.state, notes_attributes: this.props.song}
        this.props.postSong(songObject);
      }

    render() {
        const inlineBlock = {display: 'inline-block', padding: '5px'}
        return (
            <div className="songContainer">
                <form>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" onChange={ e => {this.handleChange(e)}}/>
                    <label htmlFor="musician_name">Your Name</label>
                    <input name="musician_name" type="text" onChange={ e => {this.handleChange(e)}} />
                    <input type="submit" value="Save" />
                </form>
                <button onClick={() => {playSong(this.props.song)}}>Play Song</button>
                <button onClick={this.props.clearSong}>Clear Song</button>
                <button onClick={this.handleSave}>Save Song</button>
                <div>{this.props.song.map((note, index) => {
                    return <Note key={index} index={'note-' + index} style={inlineBlock} note={note}/>})}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        song: state.song
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearSong: () => dispatch({ type: 'CLEAR_SONG' }),
        postSong: (songObject) => dispatch(postSong(songObject))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(SongControls);