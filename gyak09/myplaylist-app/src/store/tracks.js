import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.items = action.payload;
    },
    deleteTrack: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTracks, deleteTrack } = tracksSlice.actions;

export default tracksSlice.reducer;

export const getTracks = (state) => state.tracks.items;
