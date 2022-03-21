import PlaylistCard from "./PlaylistCard";

// const PlaylistsList = (props) => {
const PlaylistsList = ({ playlists, selectedId, setSelectedId }) => {
  const renderedPlaylists = playlists.map((playlist) => (
    <PlaylistCard
      key={playlist.id}
      selected={playlist.id === selectedId}
      title={playlist.title}
      description={`${playlist.tracks.length} songs`}
      select={() => setSelectedId(playlist.id)}
    />
    // <PlaylistCard
    //   key={playlist.id}
    //   selected={playlist.id === selectedId}
    //   {...playlist}
    // />
  ));

  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {renderedPlaylists}
        <div className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <div className="header">New</div>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsList;
