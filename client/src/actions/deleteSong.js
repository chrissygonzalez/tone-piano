export function deleteSong(id) {
    return (dispatch) => {
      dispatch({ type: 'START_DELETING_SONG' });
      fetch(`/api/songs/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({id: id})
    })
        .then(response => {
            response.json()
        })
        .then(response => {
          dispatch({ type: 'DELETE_SONG', id: id })
        });
    };
  }