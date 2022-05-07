import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectId, start, checkSolution } from "../state/nonogramSlice";
import { useGetNonogramsQuery } from "../state/nonogramApiSlice";
import { Nonogram } from "./nonogram/Nonogram";
import { Login } from "./Login";

function App() {
  const dispatch = useDispatch();
  const selectedPuzzleId = useSelector(selectId);
  const { data: puzzles, isLoading } = useGetNonogramsQuery();

  const handleChange = (event) => {
    const id = Number(event.target.value);

    dispatch(
      start({ id, solution: puzzles.find((item) => item.id === id).table })
    );
  };

  const handleCheck = () => {
    dispatch(checkSolution());
  };

  return <Login />;

  if (isLoading) {
    return "Betöltés alatt...";
  }

  if (!puzzles) {
    return;
  }

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
