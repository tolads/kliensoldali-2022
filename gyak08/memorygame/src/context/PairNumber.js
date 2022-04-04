import { createContext, useContext, useState } from "react";

const PairNumberContext = createContext();

const PairNumberProvider = ({ children }) => {
  const [pairNumber, setPairNumber] = useState(null);
  const reset = () => setPairNumber(null);

  const context = { pairNumber, setPairNumber, reset };

  return (
    <PairNumberContext.Provider value={context}>
      {children}
    </PairNumberContext.Provider>
  );
};

export const usePairNumber = () => useContext(PairNumberContext);

export default PairNumberProvider;
