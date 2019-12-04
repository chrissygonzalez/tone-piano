import Tone from 'tone';

const playSong = (songState) => {
    Tone.Transport.stop();
    Tone.Transport.cancel(0);

    let synth = new Tone.Synth().toMaster();
    let counter = 0;

    resetNoteStyles();

    new Tone.Part(function(time, value){
      Tone.Draw.schedule(function(){
        let playingNote = document.getElementById('note-' + counter);
        playingNote.classList.add('activeNote');
        counter += 1;
      }, time)

      synth.triggerAttackRelease(value.note, "8n", time);
    }, songState).start(0);

    Tone.Transport.start("+0.1");
}

const resetNoteStyles = () => {
    let notes = document.getElementsByClassName('song');
    let notesArr = Array.from(notes);
    notesArr.map(note => note.classList.remove('activeNote'));
}

const playTone = (note) => {
    let synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease(note, "8n");
}

const stopPlaying = () => {
  Tone.Transport.stop();
  Tone.Transport.cancel(0);
}

export { playSong, playTone, stopPlaying };