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

const { setList } = nonogramListSlice.actions;

export const fetchList = () => {
  return (dispatch) => {
    fetch("http://localhost:3030/puzzles")
      .then((response) => response.json())
      .then((response) => {
        const convertedData = response.data.map((item) => ({
          id: item.id,
          name: item.title,
          table: JSON.parse(item.puzzle),
        }));
        dispatch(setList(convertedData));
      });
  };
};

export const selectList = (state) => state.nonogramList.items;
