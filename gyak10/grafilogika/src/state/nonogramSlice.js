const initialState = { solution: [], table: [] };

export const CELL_STATE = {
  EMPTY: 0,
  SELECTED: 1,
  DESELECTED: 2,
};

const nonogramReducer = (state = initialState, action) => {
  if (action.type === "START") {
    return {
      solution: action.payload.map((line) =>
        line.split("").map((c) => c === "#")
      ),
      table: action.payload.map((row) =>
        row.split("").map(() => CELL_STATE.EMPTY)
      ),
    };
  }

  if (action.type === "TOGGLE_CELL") {
    return {
      ...state,
      table: state.table.map((row, rowIdx) => {
        if (rowIdx !== action.payload.y) return row;
        return row.map((cell, colIdx) => {
          if (colIdx !== action.payload.x) return cell;
          return (cell + 1) % 3;
        });
      }),
    };
  }

  return state;
};

export default nonogramReducer;

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
