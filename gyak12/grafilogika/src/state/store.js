import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import nonogramSlice from "./nonogramSlice";
import nonogramApiSlice from "./nonogramApiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    nonogram: nonogramSlice.reducer,
    nonogramApi: nonogramApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nonogramApiSlice.middleware),
});
