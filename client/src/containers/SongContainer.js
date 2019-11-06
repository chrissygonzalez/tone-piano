import React, { Component } from 'react';
import Tone from 'tone';

class SongContainer extends Component {
    playSong = () => {
        Tone.Transport.stop();
        Tone.Transport.cancel(0);
    
        let synth = new Tone.Synth().toMaster();
        let counter = 0;

        new Tone.Part(function(time, value){
          Tone.Draw.schedule(function(){

            // gross temporary animation
            let notes = document.getElementsByClassName('song');
            let notesArr = Array.from(notes);
            notesArr.map(note => note.style.backgroundColor = '#fff');
    
            let note = document.getElementById(counter)
            note.style.backgroundColor = 'yellow';
            counter += 1;
          }, time)
    
          synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
        }, this.props.song).start(0);
    
        Tone.Transport.start("+0.1");
      }

    render() {
        const inlineBlock = {display: 'inline-block', padding: '5px'}

        return (
            <div>
                <form>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" />
                    <input type="submit" value="Save" />
                </form>
                <button onClick={this.playSong}>Play Song</button>
                <button onClick={this.props.clearSong}>Clear Song</button>
                <div>{this.props.song.map((note, index) => <div key={index} id={index} className="song" style={inlineBlock}>{note.note}</div>)}</div>
            </div>
        )
    }
}

export default SongContainer;