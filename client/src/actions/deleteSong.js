export function deleteSong() {
    return (dispatch) => {
      dispatch({ type: 'START_DELETING_SONG' });
      fetch('/api/songs/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify(songObject)
    })
        .then(response => response.json())
        .then(songs => {
          dispatch({ type: 'DELETE_SONG' })
        });
    };
  }