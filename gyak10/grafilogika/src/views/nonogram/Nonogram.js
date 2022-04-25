import { useDispatch, useSelector } from "react-redux";

import { CELL_STATE, selectTable } from "../../state/nonogramSlice";
import styles from "./Nonogram.module.css";

const getClassName = (value) => {
  if (value === CELL_STATE.SELECTED) {
    return styles.black;
  }
  if (value === CELL_STATE.DESELECTED) {
    return styles.gray;
  }
  return styles.white;
};

export const Nonogram = () => {
  const dispatch = useDispatch();
  const { table, leftNumbers, upperNumbers } = useSelector(selectTable);

  const handleClick = (row, col) => {
    dispatch({ type: "TOGGLE_CELL", payload: { x: col, y: row } });
  };

  const upperNumbersDOM = (
    <table className={styles.upperNumbers}>
      <tbody>
        <tr>
          {upperNumbers.map((col, colIdx) => (
            <td key={colIdx}>
              {col.map((num, numIdx) => (
                <span key={numIdx}>{num}</span>
              ))}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );

  const leftNumbersDOM = (
    <table className={styles.leftNumbers}>
      <tbody>
        {upperNumbers.map((row, rowIdx) => (
          <tr key={rowIdx}>
            <td>
              {row.map((num, numIdx) => (
                <span key={numIdx}>{num}</span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const tableDOM = (
    <table className={styles.table}>
      <tbody>
        {table.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, colIdx) => (
              <td
                key={colIdx}
                className={getClassName(cell)}
                onClick={() => handleClick(rowIdx, colIdx)}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <table className={styles.root}>
      <tbody>
        <tr>
          <td></td>
          <td>{upperNumbersDOM}</td>
        </tr>
        <tr>
          <td>{leftNumbersDOM}</td>
          <td>{tableDOM}</td>
        </tr>
      </tbody>
    </table>
  );
};
