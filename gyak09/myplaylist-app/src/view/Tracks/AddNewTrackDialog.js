import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";

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

const defaultState = fields.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: "" }),
  {}
);
console.log({ defaultState });

const AddNewTrackDialog = ({ shown, hide, onSubmit }) => {
  const [values, setValues] = useState(defaultState);
  const handleChange = (event) =>
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
    hide();
  };

  return (
    <Dialog open={shown} onClose={hide}>
      <DialogTitle>Add new Track</DialogTitle>
      <DialogContent>
        <div className="description">
          <form
            id="add-net-track-form"
            className="ui form"
            onSubmit={handleSubmit}
          >
            {fields.map((field) => (
              <div className="field">
                <label>{field.label}</label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  name={field.name}
                  value={values[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={hide}>Cancel</Button>
        <Button
          form="add-net-track-form"
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewTrackDialog;
