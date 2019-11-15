export function fetchSong(id) {
    const url = `api/songs/${id}`
    return (dispatch) => {
      dispatch({ type: 'START_GETTING_SONG' });
      fetch(url)
        .then(response => response.json())
        .then(song => dispatch({ type: 'GET_SONG', song }));
    };
  }