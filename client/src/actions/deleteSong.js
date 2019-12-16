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
            // console.log(response)
            response.json()
        })
        .then(response => {
            console.log(response);
          dispatch({ type: 'DELETE_SONG' })
        });
    };
  }