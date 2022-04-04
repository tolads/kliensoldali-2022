import React from "react";
import ReactDOM from "react-dom";

import GameProgressProvider from "./context/GameProgress";
import PairNumberProvider from "./context/PairNumber";
import App from "./view/App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <PairNumberProvider>
      <GameProgressProvider>
        <App />
      </GameProgressProvider>
    </PairNumberProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
