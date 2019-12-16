export default function songReducer(state = {
    songs: [], 
    requesting: false
  }, action) {
    switch (action.type) {
      case 'START_LISTING_SONGS':
          return {
            ...state,
            songs: [...state.songs],
            requesting: true
          }

      case 'LIST_SONGS':
          return {
            ...state,
            songs: action.songs,
            requesting: false
          }
        
      case 'START_SAVING_SONG':
          return { ...state };

      case 'SAVE_SONG':
        return { 
          ...state,
          songs: [...state.songs, action.song],
          requesting: false
        };

      case 'DELETE_SONG':
        console.log('deleting');
        return { 
          ...state,
          songs: [...state.songs],
          requesting: false
        };

      default:
        return state;
    }
  }
  