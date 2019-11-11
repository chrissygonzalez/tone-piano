import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/fetchSongs'
// import Note from '../components/Note';

class SongList extends Component {
    componentDidMount() {
        this.props.fetchSongs();
    }

    handleClick = () => {
        this.props.fetchSongs();
        console.log(this.props.songs)
      }

    render(){
        return <div>
                    All Songs 
                    <ul>
                    {this.props.songs.map((song, index) => { 
                        // const songUrl = `/songs/${song.id}`
                        return <li key={index}>
                                <a href="">{song.title} by {song.musician_name}</a>
                                Notes: {song.notes ? song.notes.map(note => note.note) : null}
                        </li>
                        })}
                    </ul>
                </div>
    }
}

function mapDispatchToProps(dispatch){
    return { fetchSongs: () => dispatch(fetchSongs()) }
  }
   
  function mapStateToProps(state){
    return {songs: state.songs}
  }
   
  export default connect(mapStateToProps, mapDispatchToProps)(SongList)