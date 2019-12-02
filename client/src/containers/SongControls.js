import React, { Component } from 'react';
import SongForm from '../components/SongForm';
import SongNotes from '../components/SongNotes';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/fetchSongs'

class SongControls extends Component {
    componentDidMount() {
        this.props.fetchSongs();
    }

    render(){
        const thisSong = this.props.songs[this.props.id - 1];
        if (thisSong && !this.props.editable) {
            return (
                <div className="songControls">
                    <div className="flex space-between">
                        <h2>{thisSong.title} <span className="normal-weight">written by</span> {thisSong.musician_name}</h2>
                        <button className="link-button" onClick={() => {this.props.playSong(thisSong.notes)}}>Play Song</button>
                    </div>
                    <SongNotes notes={thisSong.notes} />
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
                    <button className="link-button" onClick={() => {this.props.playSong(this.props.songState.notes)}}>Play Song</button>
                    <button className="link-button" onClick={this.props.clearNotes}>Clear Notes</button>
                    <button className="link-button" onClick={this.props.saveSong}>Save Song</button>
                    <SongNotes notes={this.props.songState.notes} />
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