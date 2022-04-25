import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./state/store";
import { start } from "./state/nonogramSlice";
import App from "./views/App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

console.log("Initial state: ", store.getState());

store.subscribe(() => {
  console.log("New state: ", store.getState());
});
// store.dispatch({ type: "START", payload: ["# #", " # ", "# #"] });
console.log("start returns: ", start(["# #", " # ", "# #"]));
store.dispatch(start(["# #", " # ", "# #"]));
store.dispatch({ type: "TOGGLE_CELL", payload: { x: 2, y: 1 } });
