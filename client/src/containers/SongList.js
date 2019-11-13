import React from 'react';
import SongThumb from '../components/SongThumb';

const SongList = () => {
    return <div>
                All Songs 
                <ul>
                {this.props.songs.map((song, index) => { 
                    return <SongThumb key={index} song={song} />
                    })}
                </ul>
            </div>
}
   
export default SongList;