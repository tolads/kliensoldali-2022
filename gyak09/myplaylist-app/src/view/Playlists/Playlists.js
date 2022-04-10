import { useEffect, useState } from "react";

import { examplePlaylists } from "../../domain/playlist";
import PlaylistsList from "./PlaylistsList";
import PlaylistTracks from "./PlaylistTracks";
import Track from "./Track";
import AddNewPlaylist from "./AddNewPlaylist";

const Playlists = () => {
  const [playlists, setPlaylists] = useState(examplePlaylists);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const selectedPlaylist = playlists.find(
    ({ id }) => id === selectedPlaylistId
  );
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const selectedTrack = selectedPlaylist?.tracks.find(
    ({ id }) => id === selectedTrackId
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addNewPlaylist = (title) =>
    setPlaylists((prevPlaylists) => [
      ...prevPlaylists,
      { id: Date.now(), title, tracks: [] },
    ]);

  useEffect(() => {
    setSelectedTrackId(null);
  }, [selectedPlaylistId]);

  return (
    <>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <PlaylistsList
            playlists={playlists}
            selectedId={selectedPlaylistId}
            setSelectedId={setSelectedPlaylistId}
            addNew={handleOpen}
          />
          {selectedPlaylist && (
            <PlaylistTracks
              title={selectedPlaylist.title}
              tracks={selectedPlaylist.tracks}
              selectedId={selectedTrackId}
              setSelectedId={setSelectedTrackId}
            />
          )}
        </div>
        <div className="ui divider"></div>
        {selectedTrack && <Track {...selectedTrack} />}
      </div>
      <AddNewPlaylist
        open={open}
        onClose={handleClose}
        onSubmit={addNewPlaylist}
      />
    </>
  );
};

export default Playlists;
