export default function songReducer(state = {
    song: [], songs: [], requesting: false
  }, action) {
    switch (action.type) {
      case 'ADD_NOTE':
        if (state.song.length > 0) {
            const lastSongTime = state.song[state.song.length - 1].time;
            // console.log(state.song);
            return {
                ...state,
                song: [...state.song, { time: lastSongTime + 0.5, note: action.note }]
            };
        } else {
            // console.log(state.song);
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
          console.log('hitting START_SAVING_SONG')
          console.log(action)
          return { ...state };

      case 'SAVE_SONG':
        console.log('here');
        console.log(action)
        return { 
          ...state,
          songs: [...state.songs, action.song],
          requesting: false
        };


      default:
        return state;
    }
  }
  