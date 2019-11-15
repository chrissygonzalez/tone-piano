import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSong } from '../actions/postSong'
import Note from '../components/Note';
import SongForm from '../components/SongForm';
import { playSong } from '../tone/SongFunctions';

class SongControls extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            musician_name: "",
            editable: true
        }
    }

    componentDidMount = () => {
        if (this.props.savedSong){
            this.props.loadSavedSong(this.props.savedSong.notes);
            this.setState({
                title: this.props.savedSong.title,
                musician_name: this.props.savedSong.musician_name,
                editable: false
            })
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
            <div className="songControls">
                <SongForm onChange={this.handleChange} title={this.state.title} musician_name={this.state.musician_name} />

                <button onClick={() => {playSong(this.props.song)}}>Play Song</button>
                {this.state.editable && 
                <>
                    <button onClick={this.props.clearSong}>Clear Song</button>
                    <button onClick={this.handleSave}>Save Song</button>
                </>
                }
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

//add a method to add all songs to redux song state
const mapDispatchToProps = dispatch => {
    return {
        clearSong: () => dispatch({ type: 'CLEAR_SONG' }),
        postSong: (songObject) => dispatch(postSong(songObject)),
        loadSavedSong: (notes) => dispatch({type: 'LOAD_SAVED_SONG', notes: notes})
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(SongControls);