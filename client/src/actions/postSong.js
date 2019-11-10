export function postSong() {
    return (dispatch) => {
      dispatch({ type: 'START_SAVING_SONG' });
      fetch('api/songs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            "title": "Does This Work?",
            "musician_name": "Another One",
            "notes_attributes": [{
                "tone": 'C4',
                "duration": '4n'
            }]
          })
      })
        .then(response => response.json())
        .then(song => {
          console.log(song);
          return dispatch({ type: 'SAVE_SONG', song })
        });
    };
  }