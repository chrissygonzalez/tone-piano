export default function songReducer(state = {
    song: [], songs: [], requesting: false
  }, action) {
    switch (action.type) {
      case 'ADD_NOTE':
        if (state.song.length > 0) {
            const lastSongTime = state.song[state.song.length - 1].time;
            return {
                ...state,
                song: [...state.song, { time: lastSongTime + 0.5, note: action.note }]
            };
        } else {
            return { 
              ...state,
              song: [{ time: 0, note: action.note }] 
            };
        }

      case 'CLEAR_SONG':
          return {
            ...state,
            song: []
          };

      case 'LOAD_SAVED_SONG':
        return {
          ...state,
          song: action.notes
        };

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


      default:
        return state;
    }
  }
  