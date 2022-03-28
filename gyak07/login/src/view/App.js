import { useState } from "react";

import Login from "./Login";
import Private from "./Private";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const login = (user) => setLoggedInUser(user);
  const logout = () => setLoggedInUser(null);

  if (loggedInUser === null) {
    return <Login login={login} />;
  }

  return <Private loggedInUser={loggedInUser} logout={logout} />;
};

export default App;
