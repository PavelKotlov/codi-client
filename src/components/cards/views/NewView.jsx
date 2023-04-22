import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { topicContext } from "../../../providers/TopicProvider";

const NewView = (props) => {
  const { isConcept } = props;
  const { addCard, topic_id } = useContext(topicContext);

  const [loading, setLoading] = useState(false);
  const [auto, setAuto] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [note, setNote] = useState("");
  const [chips, setChips] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleAutoToggle = () => {
    setAuto((prevAuto) => !prevAuto);
    setFront("");
    setBack("");
    setNote("");
    setChips([]);
    setChecked(false);
  };

  const handleNote = (event) => {
    setNote(event.target.value);
  };

  const handleChipsChange = (event) => {
    if (chips.length <= 10 && event.target.value.length <= 15) {
      setChips((prev) => [...prev, event.target.value]);
    } else {
      alert("Tag text limit 15 characters");
    }
  };

  const handleSaveClick = () => {
    if (!auto && (front.trim() === "" || back.trim() === "")) {
      alert("Card sides cannot be empty");
      return;
    }

    if (auto) {
      if (note.trim() === "") {
        alert("Note cannot be empty");
        return;
      }
    }

    setLoading(true);
    addCard({
      topicId: topic_id,
      front: front,
      back: back,
      type: isConcept ? "CONCEPT" : "CHALLENGE",
      tags: chips,
      note: note,
      auto: auto || checked,
    })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("Unable to save changes");
      });
  };

  return (
    <Box p={8}>
      <Grid container spacing={2}>
        {/*TITLE*/}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">
            {isConcept ? "New Concept" : "New Exercise"}
          </Typography>
        </Grid>
        {/*AUTO TOGGLE*/}
        {isConcept && (
          <Grid item xs={12}>
            <FormControlLabel
              label="Auto"
              control={
                <Switch
                  checked={auto}
                  onChange={handleAutoToggle}
                  color="primary"
                />
              }
            />
          </Grid>
        )}
        {/*FLASHCARD BOTH SIDES*/}
        {!auto && (
          <Grid item xs={12}>
            <Stack spacing={2}>
              <TextField
                label="Card Front"
                value={front}
                onChange={(event) => {
                  setFront(event.target.value);
                }}
                multiline
                rows={7}
                fullWidth
                required
                sx={{ boxShadow: 4 }}
              />
              <TextField
                label="Card Back"
                value={back}
                onChange={(event) => {
                  setBack(event.target.value);
                }}
                multiline
                rows={7}
                fullWidth
                required
                sx={{ boxShadow: 4 }}
              />
            </Stack>
          </Grid>
        )}
        {/*FLASHCARD NOTE*/}
        {auto && (
          <Grid item xs={12}>
            <Stack spacing={2}>
              <TextField
                label="Note"
                value={note}
                onChange={handleNote}
                multiline
                rows={16}
                fullWidth
                required
                sx={{ boxShadow: 4 }}
              />
            </Stack>
          </Grid>
        )}
        {/*TAGS*/}
        {!auto && (
          <Grid item xs={12}>
            <Autocomplete
              multiple
              freeSolo
              value={chips}
              onChange={handleChipsChange}
              options={[]}
              renderInput={(params) => (
                <TextField {...params} label="Tags" fullWidth />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Button
                    key={option}
                    variant="contained"
                    color="primary"
                    {...getTagProps({ index })}
                  >
                    {option}
                  </Button>
                ))
              }
              sx={{ boxShadow: 4 }}
            />
          </Grid>
        )}
        {/*SAVE BUTTONS*/}
        <Grid item xs={12}>
          {loading && <p>Loading</p>}
          {!loading && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
              sx={{ boxShadow: 4 }}
            >
              {!auto ? "SAVE" : "GENERATE"}
            </Button>
          )}
        </Grid>
        {/*AUTO GENERATE BUTTONS*/}
        {!auto && isConcept && (
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => {
                    setChecked(event.target.checked);
                  }}
                  color="primary"
                />
              }
              label="Auto Generate Exercise"
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default NewView;
