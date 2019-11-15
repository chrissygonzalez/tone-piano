import React from 'react';
import SongThumb from './SongThumb';

const SongList = (props) => {
    return <div>
                All Songs 
                <ul>
                {props.songs.map((song, index) => { 
                    return <SongThumb key={index} song={song} />
                    })}
                </ul>
            </div>
}
   
export default SongList;