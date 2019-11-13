import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/fetchSongs'
import SongThumb from '../components/SongThumb';

class SongList extends Component {
    componentDidMount() {
        this.props.fetchSongs();
    }

    handleClick = () => {
        this.props.fetchSongs();
        // console.log(this.props.songs)
      }

    render(){
        return <div>
                    All Songs 
                    <ul>
                    {this.props.songs.map((song, index) => { 
                        // console.log(song);
                        return <SongThumb key={index} song={song} />
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