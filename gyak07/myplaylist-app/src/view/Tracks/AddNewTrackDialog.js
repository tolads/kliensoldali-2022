const fields = [
  {
    label: "Author",
    name: "artist",
    required: true,
    placeholder: "John Williams",
  },
  {
    label: "Track name",
    name: "title",
    required: true,
    placeholder: "Imperial March",
  },
  {
    label: "Length",
    name: "length",
    placeholder: "4:20",
  },
  {
    label: "Spotify URL",
    name: "spotifyURL",
    placeholder: "https://",
  },
  {
    label: "Lyrics URL",
    name: "lyricsURL",
    placeholder: "https://",
  },
  {
    label: "Guitar tab URL",
    name: "chordsURL",
    placeholder: "https://",
  },
];

const AddNewTrackDialog = () => {
  return (
    <div className="ui modal">
      <i className="close icon"></i>
      <div className="header">Add new Track</div>
      <div className="image content">
        <div className="description">
          <form className="ui form">
            <div className="two fields">
              <div className="field">
                <label>Author</label>
                <input required type="text" placeholder="John Williams" />
              </div>
              <div className="field">
                <label>Track name</label>
                <input required type="text" placeholder="Imperial March" />
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label>Spotify URL</label>
                <input type="text" placeholder="https://" />
              </div>
              <div className="field">
                <label>Lyrics URL</label>
                <input type="text" placeholder="https://" />
              </div>
              <div className="field">
                <label>Guitar tab URL</label>
                <input type="text" placeholder="https://" />
              </div>
            </div>
          </form>
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
  );
};

export default AddNewTrackDialog;
