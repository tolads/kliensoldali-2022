import { configureStore } from "@reduxjs/toolkit";

import playlistsReducer from "./playlists";
import tracksReducer from "./tracks";

export const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
    tracks: tracksReducer,
  },
});
