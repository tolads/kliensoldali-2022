import { configureStore } from "@reduxjs/toolkit";

import nonogramSlice from "./nonogramSlice";
import nonogramListSlice from "./nonogramListSlice";

export const store = configureStore({
  reducer: {
    nonogram: nonogramSlice.reducer,
    nonogramList: nonogramListSlice.reducer,
  },
});
