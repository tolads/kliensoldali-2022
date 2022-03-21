import PlaylistCard from "./PlaylistCard";

const PlaylistTracks = ({ title, tracks }) => {
  return (
    <div className="ui ten wide column">
      <h3>{title}</h3>
      <div className="ui very relaxed selection list">
        {tracks.map((track) => (
          <PlaylistCard
            key={track.id}
            title={track.title}
            description={track.artist}
            icon="music"
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistTracks;
