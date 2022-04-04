import { createContext, useContext, useEffect, useState } from "react";
import { shuffle } from "lodash";

import { getImages } from "../api/api";
import { usePairNumber } from "./PairNumber";

const GameProgressContext = createContext();

const GameProgressProvider = ({ children }) => {
  const { pairNumber } = usePairNumber();

  const [catImages, setCatImages] = useState([]);
  const [firstFlipped, setFirstFlipped] = useState(null);
  const [secondFlipped, setSecondFlipped] = useState(null);
  const [foundIds, setFoundIds] = useState([]);

  const flip = (idx) => {
    if (firstFlipped === null) {
      setFirstFlipped(idx);
    } else if (secondFlipped === null) {
      if (firstFlipped === idx) return;

      if (catImages[firstFlipped].id === catImages[idx].id) {
        const id = catImages[idx].id;
        setFoundIds((prevState) => [...prevState, id]);
        setFirstFlipped(null);
      } else {
        setSecondFlipped(idx);

        setTimeout(() => {
          setFirstFlipped(null);
          setSecondFlipped(null);
        }, 1500);
      }
    }
  };

  const isFlipped = (idx) =>
    firstFlipped === idx ||
    secondFlipped === idx ||
    foundIds.includes(catImages[idx].id);

  useEffect(() => {
    if (!pairNumber) {
      setCatImages([]);
      setFoundIds([]);
      return;
    }

    getImages(pairNumber).then((response) => {
      setCatImages(shuffle([...response, ...response]));
    });
  }, [pairNumber]);

  const context = { catImages, flip, isFlipped, foundIds };

  return (
    <GameProgressContext.Provider value={context}>
      {children}
    </GameProgressContext.Provider>
  );
};

export const useGameProgress = () => useContext(GameProgressContext);

export default GameProgressProvider;
