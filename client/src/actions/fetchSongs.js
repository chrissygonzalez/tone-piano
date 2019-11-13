export function fetchSongs() {
    return (dispatch) => {
      dispatch({ type: 'START_LISTING_SONGS' });
      fetch('/api/songs')
        .then(response => response.json())
        .then(songs => dispatch({ type: 'LIST_SONGS', songs }));
    };
  }