import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setPlaylists: (state, action) => {
      state.items = action.payload;
    },
    addPlaylist: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlaylists, addPlaylist } = playlistsSlice.actions;

export default playlistsSlice.reducer;

export const getPlaylists = (state) => state.playlists.items;
