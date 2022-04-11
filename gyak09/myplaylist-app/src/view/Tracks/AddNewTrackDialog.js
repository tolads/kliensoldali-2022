import { useEffect, useState } from "react";
import cn from "classnames";

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
  (acc, curr) => ({ ...acc, [curr.name]: { value: "", touched: false } }),
  {}
);
console.log({ defaultState });

const AddNewTrackDialog = ({ shown, hide, onSubmit }) => {
  const [values, setValues] = useState(defaultState);
  const handleChange = (event) =>
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: {
        value: event.target.value,
        touched: prevValues[event.target.name].touched,
      },
    }));
  const handleBlur = (event) =>
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: {
        touched: true,
        value: prevValues[event.target.name].value,
      },
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
    hide();
  };

  useEffect(() => {
    setValues(defaultState);
  }, [shown]);

  const errors = fields.reduce((acc, curr) => {
    if (curr.required && values[curr.name].value.trim() === "") {
      acc[curr.name] = `The field ${curr.label} is required.`;
    }
    return acc;
  }, {});

  const canSubmit = !Object.values(errors).length;

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
              <div
                key={field.name}
                className={cn("field", {
                  error: errors[field.name] && values[field.name].touched,
                })}
              >
                <label>{field.label}</label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  name={field.name}
                  value={values[field.name].value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            ))}
          </form>
          <ul>
            {Object.entries(errors)
              .filter(([name]) => values[name].touched)
              .map(([name, errorMessage]) => (
                <li key={name}>{errorMessage}</li>
              ))}
          </ul>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={hide}>Cancel</Button>
        <Button
          form="add-net-track-form"
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          disabled={!canSubmit}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewTrackDialog;
