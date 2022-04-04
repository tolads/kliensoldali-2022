import { useGameProgress } from "../context/GameProgress";
import { usePairNumber } from "../context/PairNumber";
import Board from "./Board";
import Card from "./Card";
import Start from "./Start";
import Won from "./Won";

const App = () => {
  const { pairNumber } = usePairNumber();
  const { catImages, flip, isFlipped, foundIds } = useGameProgress();

  if (!pairNumber) {
    return <Start />;
  }

  if (!catImages) {
    return "Betöltés alatt...";
  }

  if (foundIds.length === pairNumber) {
    return <Won />;
  }
  console.log(catImages);
  return (
    <Board>
      {catImages.map(({ id, url }, idx) => (
        <Card
          key={idx}
          flipped={isFlipped(idx)}
          onClick={() => flip(idx)}
          url={url}
        />
      ))}
    </Board>
  );
};

export default App;
