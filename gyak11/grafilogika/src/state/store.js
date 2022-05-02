import { configureStore } from "@reduxjs/toolkit";

import nonogramSlice from "./nonogramSlice";
// import nonogramListSlice from "./nonogramListSlice";
import nonogramApiSlice from "./nonogramApiSlice";

export const store = configureStore({
  reducer: {
    nonogram: nonogramSlice.reducer,
    // nonogramList: nonogramListSlice.reducer,
    nonogramApi: nonogramApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nonogramApiSlice.middleware),
});
