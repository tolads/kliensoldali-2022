import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { selectCurrentUser } from "../state/authSlice";
import { Nonogram } from "./nonogram/Nonogram";
import { Login } from "./Login";
import { List } from "./List";
import { CreateNonogram } from "./CreateNonogram";
import { User } from "./User";

function App() {
  const user = useSelector(selectCurrentUser);

  return (
    <div>
      <h1>Grafilogika</h1>
      {!user ? (
        <Login />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/new" element={<CreateNonogram />} />
            <Route path="/nonograms/:id" element={<Nonogram />} />
          </Routes>
          <User />
        </>
      )}
    </div>
  );
}

export default App;
