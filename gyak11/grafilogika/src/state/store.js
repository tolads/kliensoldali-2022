import { configureStore } from "@reduxjs/toolkit";

import nonogramSlice from "./nonogramSlice";

export const store = configureStore({
  reducer: nonogramSlice.reducer,
});
