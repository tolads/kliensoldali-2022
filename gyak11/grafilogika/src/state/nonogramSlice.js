import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  solution: [],
  table: [],
  solutionChecked: false,
};

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
      state.solutionChecked = false;
      state.id = action.payload.id;
      state.solution = action.payload.solution.map((line) =>
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
    startSolutionCheck: (state) => {
      state.solutionChecked = true;
    },
    finishSolutionCheck: (state) => {
      state.solutionChecked = false;
    },
  },
});

export default nonogramSlice;

export const { start, toggleCell, startSolutionCheck, finishSolutionCheck } =
  nonogramSlice.actions;

export const selectTable = (state) => {
  const { solution, table, solutionChecked } = state;

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

  return { table, leftNumbers, upperNumbers, solution, solutionChecked };
};

export const selectId = (state) => state.id;
