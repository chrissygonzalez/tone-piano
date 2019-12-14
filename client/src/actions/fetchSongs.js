export function fetchSongs() {
    // console.log('c');
    return (dispatch) => {
      dispatch({ type: 'START_LISTING_SONGS' });
      fetch('/api/songs')
        .then(response => response.json())
        .then(songs => {
          // console.log('d');
          dispatch({ type: 'LIST_SONGS', songs })
        });
    };
    // console.log('e');
  }