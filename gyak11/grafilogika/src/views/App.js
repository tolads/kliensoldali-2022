import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectId, start, checkSolution } from "../state/nonogramSlice";
import { selectList, fetchList } from "../state/nonogramListSlice";
import { Nonogram } from "./nonogram/Nonogram";

function App() {
  const dispatch = useDispatch();
  const selectedPuzzleId = useSelector(selectId);
  const puzzles = useSelector(selectList);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const handleChange = (event) => {
    const id = Number(event.target.value);

    dispatch(
      start({ id, solution: puzzles.find((item) => item.id === id).table })
    );
  };

  const handleCheck = () => {
    dispatch(checkSolution());
  };

  return (
    <>
      <h1>Grafilogika</h1>
      <label>
        Rejtvény:{" "}
        <select
          value={selectedPuzzleId === null ? "" : selectedPuzzleId}
          onChange={handleChange}
        >
          <option disabled value="">
            Válassz...
          </option>
          {puzzles.map((puzzle) => (
            <option key={puzzle.id} value={puzzle.id}>
              {puzzle.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleCheck}>Ellenőrzés</button>
      <Nonogram />
    </>
  );
}

export default App;
