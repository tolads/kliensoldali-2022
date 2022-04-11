import { useState } from "react";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { getPlaylists } from "../../store/playlists";

const TrackRow = ({ artist, title, onDelete }) => {
  const playlists = useSelector(getPlaylists);

  const [anchorEl, setAnchorEl] = useState(null);
  const showDropdown = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const addToPlaylist = handleClose;

  return (
    <tr>
      <td>
        <i className="user icon"></i> {artist}
      </td>
      <td>
        <i className="music icon"></i> {title}
      </td>
      <td className="right aligned collapsing">
        <div
          className="ui icon top right pointing dropdown button"
          onClick={showDropdown}
        >
          <i className="plus icon"></i>
        </div>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
          {playlists.map((playlist) => (
            <MenuItem key={playlist.id} onClick={addToPlaylist}>
              {playlist.title}
            </MenuItem>
          ))}
        </Menu>
        <button className="ui icon button">
          <i className="edit icon"></i>
        </button>
        <button className="ui icon button red" onClick={onDelete}>
          <i className="trash icon"></i>
        </button>
      </td>
    </tr>
  );
};

export default TrackRow;
