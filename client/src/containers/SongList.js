import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/fetchSongs'
// import Note from '../components/Note';

class SongList extends Component {
    handleClick = () => {
        this.props.fetchSongs();
        console.log(this.props.songs)
      }

    render(){
        return <div>
            <div>
                All Songs 
                <button onClick={this.handleClick}>Get Songs</button> 
                <ul>
                {this.props.songs.map((song, index) => { 
                    return <li key={index}>{song.title} Notes: {song.notes.map(note => note.tone)}</li>
                    })}
                </ul>
            </div>
        </div>;
    }
}

function mapDispatchToProps(dispatch){
    return { fetchSongs: () => dispatch(fetchSongs()) }
  }
   
  function mapStateToProps(state){
    return {songs: state.songs}
  }
   
  export default connect(mapStateToProps, mapDispatchToProps)(SongList)