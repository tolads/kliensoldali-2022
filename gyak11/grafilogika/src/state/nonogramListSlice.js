import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const nonogramListSlice = createSlice({
  name: "nonogramList",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default nonogramListSlice;

export const { setList } = nonogramListSlice.actions;

export const selectList = (state) => state.nonogramList.items;
