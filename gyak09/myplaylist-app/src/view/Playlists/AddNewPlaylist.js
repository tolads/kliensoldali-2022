import { useEffect, useState } from "react";
import cn from "classnames";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";

const AddNewPlaylist = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);

  useEffect(() => {
    if (open) {
      setTitle("");
    }
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    onClose();
  };

  const error = title.trim() === "";

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add new Playlist</DialogTitle>
      <DialogContent>
        <div className="description">
          <form className="ui form" onSubmit={handleSubmit}>
            <div className={cn("field", { error })}>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="My Playlist"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewPlaylist;
