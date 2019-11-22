import React, { Component } from 'react';
import Note from '../components/Note';
import SongForm from '../components/SongForm';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/fetchSongs'

class SongControls extends Component {
    componentDidMount() {
        this.props.fetchSongs();
    }

    // inlineBlock = {display: 'flex', padding: '5px'}

    render(){
        const thisSong = this.props.songs[this.props.id - 1];
        if (thisSong && !this.props.editable) {
        return (
            <div className="songControls">
                <h2>{thisSong.title} <span className="normal-weight">written by</span> {thisSong.musician_name}</h2>
                <button onClick={() => {this.props.playSong(thisSong.notes)}}>Play Song</button>
                <div className="flex light-shade note-container">
                    {thisSong.notes.map((note, index) => {
                        return <Note key={index} index={'note-' + index} style={this.inlineBlock} note={note}/>
                    })}
                </div>
            </div>
        )
        } else if (this.props.newSong){
            return (
                <div className="songControls">
                    <SongForm 
                        onChange={event => {this.props.handleChange(event)}} 
                        title={this.props.songState.title} 
                        musician_name={this.props.songState.musician_name} 
                        />
                    <button onClick={() => {this.props.playSong(this.props.songState.notes)}}>Play Song</button>
                    <button onClick={this.props.clearNotes}>Clear Notes</button>
                    <button onClick={this.props.saveSong}>Save Song</button>
                    {/* break this out into its own component */}
                    <div className="flex light-shade note-container">
                        {this.props.songState.notes.map((note, index) => {
                            return <Note key={index} index={'note-' + index} note={note}/>
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <h2>Loading...</h2>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        fetchSongs: () => dispatch(fetchSongs())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SongControls);