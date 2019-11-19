import React from 'react';
import SongThumb from './SongThumb';

const SongList = (props) => {
    return <div className="song-list-container">
                All Songs 
                <ul className="song-list">
                {props.songs.map((song, index) => { 
                    return <SongThumb key={index} song={song} />
                    })}
                </ul>
            </div>
}
   
export default SongList;