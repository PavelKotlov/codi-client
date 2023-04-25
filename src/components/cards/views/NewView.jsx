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
  CircularProgress,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { topicContext } from "../../../providers/TopicProvider";

const NewView = (props) => {
  const { isConcept } = props;
  const { addCard, topic } = useContext(topicContext);

  const [loading, setLoading] = useState(false);
  const [auto, setAuto] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [note, setNote] = useState("");
  const [chips, setChips] = useState([]);
  const [checked, setChecked] = useState(false);

  const reset = () => {
    setFront("");
    setBack("");
    setNote("");
    setChips([]);
  };

  const handleAutoToggle = () => {
    setAuto((prevAuto) => !prevAuto);
    reset();
    setChecked(false);
  };

  const handleNote = (event) => {
    // code to limit characters
    if (event.target.value.length <= 500) {
      setNote(event.target.value);
    } else {
      alert("Note text limit 500 characters");
    }
    // setNote(event.target.value);
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
      topicId: topic.id,
      front: front,
      back: back,
      type: isConcept ? "CONCEPT" : "CHALLENGE",
      tags: chips,
      note: note,
      auto: auto || checked,
    })
      .then(() => {
        setLoading(false);
        reset();
      })
      .catch((err) => {
        setLoading(false);
        alert("Unable to save changes");
      });
  };

  return (
    <Box p={8}>
      <Grid container spacing={4} px={20}>
        {/*TITLE*/}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h3" color="primaryCodi.dark">
            {isConcept ? "Create Concept Card" : "Create Exercise Card"}
          </Typography>
        </Grid>
        {/*AUTO TOGGLE*/}
        {isConcept && (
          <Grid item xs={12}>
            <FormControlLabel
              label="Auto"
              sx={{ color: "primaryCodi.dark" }}
              control={
                <Switch
                  checked={auto}
                  onChange={handleAutoToggle}
                  color="info"
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
                placeholder="Card Front"
                variant="standard"
                value={front}
                multiline
                rows={2}
                fullWidth
                required
                onChange={(event) => {
                  setFront(event.target.value);
                }}
                InputProps={{
                  disableUnderline: true,
                  style: { fontSize: 27 },
                }}
                InputLabelProps={{
                  sx: {
                    color: "primaryCodi.dark",
                  },
                }}
                sx={{
                  bgcolor: "primaryCodi.light",
                  boxShadow: 4,
                  borderRadius: 7,
                  px: 3,
                  py: 2,
                  fontSize: 4,
                  boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
                }}
              />
              <TextField
                placeholder="Card Back"
                variant="standard"
                value={back}
                multiline
                rows={7}
                fullWidth
                required
                onChange={(event) => {
                  setBack(event.target.value);
                }}
                InputProps={{
                  disableUnderline: true,
                  style: { fontSize: 27 },
                }}
                sx={{
                  bgcolor: "primaryCodi.light",
                  boxShadow: 4,
                  borderRadius: 7,
                  px: 3,
                  py: 2,
                  boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
                }}
              />
            </Stack>
          </Grid>
        )}
        {/*FLASHCARD NOTE*/}
        {auto && (
          <Grid item xs={12}>
            <Stack spacing={2}>
              <TextField
                placeholder="Note"
                variant="standard"
                value={note}
                multiline
                rows={12}
                fullWidth
                required
                onChange={handleNote}
                InputProps={{
                  disableUnderline: true,
                  style: { fontSize: 27 },
                }}
                sx={{
                  bgcolor: "primaryCodi.light",
                  boxShadow: 4,
                  borderRadius: 7,
                  px: 3,
                  py: 2,
                  boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
                }}
              />
            </Stack>
          </Grid>
        )}
        {/*TODO: REDO TAGS*/}
        {/* {!auto && (
          <Grid item xs={12}>
            <Autocomplete
              multiple
              freeSolo
              value={chips}
              onChange={handleChipsChange}
              options={[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Tags"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                    style: { fontSize: 27 },
                  }}
                  sx={{
                    bgcolor: "primaryCodi.light",
                    boxShadow: 4,
                    borderRadius: 7,
                    px: 3,
                    py: 2,
                  }}
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Button
                    key={option}
                    variant="contained"
                    sx={{
                      boxShadow: 4,
                      bgcolor: "accentsCodi.pink",
                      "&:hover": {
                        bgcolor: "accentsCodi.pink",
                      },
                    }}
                    {...getTagProps({ index })}
                  >
                    {option}
                  </Button>
                ))
              }
              sx={{
                boxShadow: 4,
                bgcolor: "primaryCodi.light",
                borderRadius: 5,
              }}
            />
          </Grid>
        )} */}
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
                  color="secondary"
                />
              }
              label="Auto Generate Exercise"
              sx={{ color: "primaryCodi.dark" }}
            />
          </Grid>
        )}
        {/*SAVE BUTTONS*/}
        <Grid item xs={12}>
          {loading && <CircularProgress />}
          {!loading && (
            <Button
              variant="contained"
              onClick={handleSaveClick}
              sx={{
                boxShadow: 4,
                bgcolor: "accentsCodi.pink",
                "&:hover": {
                  bgcolor: "accentsCodi.pinkHover",
                  color: "primaryCodi.dark",
                },
              }}
            >
              {!auto ? "SAVE" : "GENERATE"}
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewView;
