import { createSlice } from "@reduxjs/toolkit";

const initialState = { solution: [], table: [] };

export const CELL_STATE = {
  EMPTY: 0,
  SELECTED: 1,
  DESELECTED: 2,
};

const nonogramSlice = createSlice({
  name: "nonogram",
  initialState,
  reducers: {
    start: (state, action) => {
      state.solution = action.payload.map((line) =>
        line.split("").map((c) => c === "#")
      );
      state.table = state.solution.map((row) =>
        row.map(() => CELL_STATE.EMPTY)
      );
    },
    toggleCell: (state, action) => {
      const { x, y } = action.payload;
      state.table[y][x] = (state.table[y][x] + 1) % 3;
    },
  },
});

export default nonogramSlice;
export const { start, toggleCell } = nonogramSlice.actions;

export const selectTable = (state) => {
  const { solution, table } = state;

  const leftNumbers = solution.map((row) =>
    row
      .map((x) => (x ? "#" : " "))
      .join("")
      .split(" ")
      .map((s) => s.length)
      .filter(Boolean)
  );

  const upperNumbers = solution[0]
    ? solution[0].map((_, i) =>
        solution
          .map((row) => (row[i] ? "#" : " "))
          .join("")
          .split(" ")
          .map((s) => s.length)
          .filter(Boolean)
      )
    : [];

  return { table, leftNumbers, upperNumbers };
};
