import { Routes, Route, Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import Playlists from "./Playlists/Playlists";
import Tracks from "./Tracks/Tracks";

const App = () => {
  return (
    <div className="ui container">
      <nav className="ui secondary menu">
        <img src={logo} alt="logo" />
        <NavLink className="item" to="/">
          <i className="home icon"></i> Home
        </NavLink>
        <NavLink className="item" to="/playlists">
          <i className="headphones icon"></i> My Playlists
        </NavLink>
        <NavLink className="item" to="/tracks">
          <i className="music icon"></i> Tracks
        </NavLink>
        <NavLink className="item" to="/search">
          <i className="search icon"></i> Search
        </NavLink>
        <div className="ui right dropdown item">
          John Doe
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">
              <i className="user icon"></i> Profile
            </div>
            <div className="item">
              <i className="settings icon"></i> Settings
            </div>
            <div className="item">
              <i className="sign out icon"></i>Log out
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="*" element={<h1>Not found :(</h1>} />
      </Routes>
    </div>
  );
};

export default App;
