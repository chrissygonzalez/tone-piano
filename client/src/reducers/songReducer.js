export default function songReducer(state = {
    song: {
      notes: [],
      title: "",
      musician_name: ""
    }, 
    songs: [], 
    requesting: false
  }, action) {
    switch (action.type) {
      case 'ADD_NOTE':
        if (state.song.notes.length > 0) {
            const lastSongTime = state.song.notes[state.song.notes.length - 1].time;
            return {
                ...state,
                ...state.song,
                notes: [...state.song.notes, { time: lastSongTime + 0.5, note: action.note }]
            };
        } else {
            return { 
              ...state,
              ...state.song,
              notes: [{ time: 0, note: action.note }] 
            };
        }

      case 'CLEAR_SONG':
          return {
            ...state,
            song: {
              notes: [],
              title: "",
              musician_name: ""
            }
          };

      case 'LOAD_SAVED_SONG':
        return {
          ...state,
          song: action.song
        };

      case 'START_LISTING_SONGS':
          return {
            ...state,
            songs: [...state.songs],
            requesting: true
          }

      case 'LIST_SONGS':
        // console.log(action.songs)
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
  