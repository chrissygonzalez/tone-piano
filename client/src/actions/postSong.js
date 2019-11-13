export function postSong(songObject) {
  // console.log(songObject);
    return (dispatch) => {
      dispatch({ type: 'START_SAVING_SONG' });
      fetch('/api/songs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(songObject)
      })
        .then(response => response.json())
        .then(song => {
          // console.log(song);
          return dispatch({ type: 'SAVE_SONG', song })
        });
    };
  }