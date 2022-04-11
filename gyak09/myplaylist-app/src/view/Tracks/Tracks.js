import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { exampleTracks } from "../../domain/track";
import { getTracks, deleteTrack } from "../../store/tracks";
import AddNewTrackDialog from "./AddNewTrackDialog";
import TrackRow from "./TrackRow";

const Tracks = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(getTracks);

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
            {tracks.map((track) => (
              <TrackRow
                key={track.id}
                {...track}
                onDelete={() => dispatch(deleteTrack(track.id))}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tracks;
