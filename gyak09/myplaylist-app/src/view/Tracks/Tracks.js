import { useState } from "react";

import { exampleTracks } from "../../domain/track";
import AddNewTrackDialog from "./AddNewTrackDialog";
import TrackRow from "./TrackRow";

const Tracks = () => {
  const [tracks, setTracks] = useState(exampleTracks);

  const [dialogShown, setDialogShown] = useState(false);
  const showDialog = () => setDialogShown(true);
  const hideDialog = () => setDialogShown(false);

  const deleteTrack = (id) =>
    setTracks((prevTracks) => prevTracks.filter((track) => track.id !== id));

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
            {tracks.map((track) => (
              <TrackRow
                key={track.id}
                {...track}
                onDelete={() => deleteTrack(track.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tracks;
