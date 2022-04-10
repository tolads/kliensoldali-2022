import PlaylistCard from "./PlaylistCard";

const PlaylistsList = ({ playlists, selectedId, setSelectedId, addNew }) => {
  const renderedPlaylists = playlists.map((playlist) => (
    <PlaylistCard
      key={playlist.id}
      selected={playlist.id === selectedId}
      title={playlist.title}
      description={`${playlist.tracks.length} songs`}
      select={() => setSelectedId(playlist.id)}
    />
  ));

  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {renderedPlaylists}
        <div className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content" onClick={addNew}>
            <div className="header">New</div>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsList;
