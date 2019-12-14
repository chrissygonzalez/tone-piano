import React, { Component } from 'react';
import SongThumb from './SongThumb';

class SongList extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ""
        }
    } 

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value.toLowerCase()
        });
    }

    render() {
        let filteredSongs = this.props.songs.filter(song => song.title.toLowerCase().includes(this.state.searchTerm));
        return ( 
            <div className="song-list-container">
                <input name='searchTerm' type='search' placeholder='Search Song Titles' onChange={e => {this.handleChange(e)}} value={this.state.searchTerm} />
                    <ul className="song-list">
                    {filteredSongs.map((song, index) => { 
                        return <SongThumb key={index} song={song} />
                        })}
                    </ul>
                </div> 
        )}
}
   
export default SongList;