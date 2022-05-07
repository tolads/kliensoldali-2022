import { useState } from "react";
import { Link } from "react-router-dom";

import { useGetNonogramsQuery } from "../state/nonogramApiSlice";

export const List = () => {
  const [page, setPage] = useState(0);
  const { data: puzzles, isLoading } = useGetNonogramsQuery(page);

  if (isLoading) {
    return "Betöltés alatt...";
  }

  return (
    <>
      <h2>Rejtvények</h2>
      <ul>
        {!puzzles && "Nincsenek rejtvények"}
        {puzzles?.map((puzzle) => (
          <li key={puzzle.id}>
            <Link to={`/nonograms/${puzzle.id}`}>{puzzle.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(page - 1)}>Előző oldal</button>
        {`#${page + 1}`}
        <button onClick={() => setPage(page + 1)}>Következő oldal</button>
      </div>
      <Link to="/new">Új rejtvény</Link>
    </>
  );
};
