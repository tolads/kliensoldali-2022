import { useState } from "react";

import bonjovi from "../../assets/bonjovi.jpg";
import { examplePlaylists } from "../../domain/playlist";
import CounterButton from "./CounterButton";
import PlaylistsList from "./PlaylistsList";
import PlaylistTracks from "./PlaylistTracks";

const Playlists = () => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState();
  console.log("render", selectedPlaylistId);
  // ugyanaz:
  // const state = useState(2);
  // const selectedId = state.selectedId;
  // const setSelectedId = state.setSelectedId;
  // const selectedId = 2;
  const playlists = examplePlaylists;

  const selectedPlaylist = playlists.find(
    ({ id }) => id === selectedPlaylistId
  );

  return (
    <>
      <CounterButton />
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <PlaylistsList
            playlists={playlists}
            selectedId={selectedPlaylistId}
            setSelectedId={setSelectedPlaylistId}
          />
          {selectedPlaylist && (
            <PlaylistTracks
              title={selectedPlaylist.title}
              tracks={selectedPlaylist.tracks}
            />
          )}
        </div>
        <div className="ui divider"></div>
        <div className="ui segment">
          <div className="ui items">
            <div className="item">
              <div className="image">
                <img src={bonjovi} alt="" />
              </div>
              <div className="content">
                <div className="header">It's my life</div>
                <div className="meta">
                  <span>Bon Jovi</span>
                  <span>4:35</span>
                </div>
                <div className="extra">
                  <a
                    href="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
                    className="ui button tiny green button"
                  >
                    <i className="spotify icon"></i>
                    Listen on Spotify
                  </a>
                  <a
                    href="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
                    className="ui button tiny teal button"
                  >
                    <i className="microphone icon"></i>
                    Show lyrics
                  </a>
                  <a
                    href="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
                    className="ui button tiny orange button"
                  >
                    <i className="guitar icon"></i>
                    Show chords
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui modal">
        <i className="close icon"></i>
        <div className="header">Add new Playlist</div>
        <div className="image content">
          <div className="description">
            <div className="ui form">
              <div className="field">
                <label>Name</label>
                <input required type="text" placeholder="My Playlist" />
              </div>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui black deny button">Cancel</div>
          <div className="ui positive right labeled icon button">
            Add
            <i className="plus icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlists;
