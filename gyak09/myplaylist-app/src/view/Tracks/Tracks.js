import { useState } from "react";

import { exampleTracks } from "../../domain/track";
import AddNewTrackDialog from "./AddNewTrackDialog";

const Tracks = () => {
  const [dialogShown, setDialogShown] = useState(false);
  const showDialog = () => setDialogShown(true);
  const hideDialog = () => setDialogShown(false);

  return (
    <>
      <div className="ui container">
        <button
          className="ui right floated green button"
          id="newModal"
          onClick={showDialog}
        >
          <i className="plus icon"></i>
          New track
        </button>
        <AddNewTrackDialog
          shown={dialogShown}
          hide={hideDialog}
          onSubmit={(values) => console.log(values)}
        />
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exampleTracks.map((track) => (
              <tr key={track.id}>
                <td>
                  <i className="user icon"></i> {track.artist}
                </td>
                <td>
                  <i className="music icon"></i> {track.title}
                </td>
                <td className="right aligned collapsing">
                  <div className="ui icon top right pointing dropdown button">
                    <i className="plus icon"></i>
                    <div className="menu">
                      <div className="header">Add to playlist</div>
                      <div className="ui search icon input">
                        <i className="search icon"></i>
                        <input
                          type="text"
                          name="search"
                          placeholder="Search playlists..."
                        />
                      </div>
                      <div className="item">Heavy Metal</div>
                      <div className="item">Classics</div>
                      <div className="item">Movie Soundtracks</div>
                    </div>
                  </div>
                  <button className="ui icon button">
                    <i className="edit icon"></i>
                  </button>
                  <button className="ui icon button red">
                    <i className="trash icon"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tracks;
