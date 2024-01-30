import { createSlice } from '@reduxjs/toolkit'


export const spotifySlice = createSlice({
    
  name: 'spotify',
  initialState: {
    playlists : null,
    songs: null,
    playingSong: null,
    topSong: null,
    isPlaying: false,
  },
  reducers: {
    setPlaylist : (state, action)=>{
        state.playlists = action.payload;
    },
    setSong : (state, action)=>{
      state.songs = action.payload;
    },
    setPlayingSong : (state, action)=>{
      state.playingSong = action.payload;
    },
    setIsPlaying : (state)=>{
      state.isPlaying = !state.isPlaying;
    },
    setTopSong : (state)=>{
      state.topSong = action.payload;
    },
  },
})


export const { setPlaylist,setSong,setPlayingSong,setIsPlaying,setTopSong } = spotifySlice.actions

export default spotifySlice.reducer