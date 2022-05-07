import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { usePostNonogramMutation } from "../state/nonogramApiSlice";

export const CreateNonogram = () => {
  const [postNonogram] = usePostNonogramMutation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [puzzle, setPuzzle] = useState("");
  const [error, setError] = useState(null);
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handlePuzzleChange = (event) => setPuzzle(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === "") {
      setError("Név megadása kötelező!");
      return;
    }
    if (puzzle.trim() === "") {
      setError("Rejtvény megadása kötelező!");
      return;
    }
    if (!/^[ #\n]+$/.test(puzzle)) {
      setError("Rejtvény csak szóközt és # karaktert tartalmazhat!");
      return;
    }
    const transformedPuzzle = puzzle.split(/\r?\n/);
    const lineLengths = transformedPuzzle.map((line) => line.length);
    if ([...new Set(lineLengths)].length !== 1) {
      setError("Nem minden sor egyforma hosszú!");
      return;
    }

    setError(null);
    postNonogram({ title, puzzle: JSON.stringify(transformedPuzzle) })
      .unwrap()
      .then((data) => {
        navigate(`/nonograms/${data.id}`);
      })
      .catch(() => {
        setError("Hiba történt a mentés során, próbálkozz később!");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Új rejtvény</h2>
      <Link to="/">Vissza</Link>
      <div>
        <label htmlFor="title">Név:</label>
        <input type="text" name="title" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="puzzle">Rejtvény:</label>
        <textarea name="puzzle" id="puzzle" value={puzzle} onChange={handlePuzzleChange} />
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">Elküld</button>
    </form>
  );
};
