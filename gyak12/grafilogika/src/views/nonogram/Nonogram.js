import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { useGetNonogramQuery } from "../../state/nonogramApiSlice";
import {
  CELL_STATE,
  checkSolution,
  selectSolved,
  selectTable,
  start,
  toggleCell,
} from "../../state/nonogramSlice";
import styles from "./Nonogram.module.css";

const getClassName = (value, solution) => {
  if (
    (value === CELL_STATE.SELECTED && solution === false) ||
    (value === CELL_STATE.DESELECTED && solution === true)
  ) {
    return styles.red;
  }
  if (value === CELL_STATE.SELECTED) {
    return styles.black;
  }
  if (value === CELL_STATE.DESELECTED) {
    return styles.gray;
  }
  return styles.white;
};

export const Nonogram = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetNonogramQuery(id);
  const dispatch = useDispatch();
  const { table, leftNumbers, upperNumbers, solution, solutionChecked } = useSelector(selectTable);
  const solved = useSelector(selectSolved);

  const handleClick = (row, col) => {
    dispatch(toggleCell({ x: col, y: row }));
  };

  const handleCheck = () => {
    dispatch(checkSolution());
  };

  useEffect(() => {
    if (!data) return;
    dispatch(start({ id: data.id, solution: data.table }));
  }, [data, dispatch]);

  if (isLoading) {
    return "Betöltés alatt...";
  }

  if (!data) {
    return "Nem található a feladvány";
  }

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
        {leftNumbers.map((row, rowIdx) => (
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
                className={getClassName(
                  cell,
                  solutionChecked ? solution[rowIdx][colIdx] : undefined
                )}
                onClick={() => handleClick(rowIdx, colIdx)}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <h2>{data.name}</h2>
      <div>
        <Link to="/">Vissza</Link>
        <button onClick={handleCheck}>Ellenőrzés</button>
        {solved && "Gratulálok!"}
      </div>
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
    </>
  );
};
