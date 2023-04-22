import React, { useContext, useEffect, useState } from "react";
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

const EditView = (props) => {
  const { setView, selectedCard } = props;
  const { editCard, addCard, topic_id } = useContext(topicContext);

  const [loading, setLoading] = useState(false);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [chips, setChips] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setFront(selectedCard.front);
    setBack(selectedCard.back);
    setChips(selectedCard.tags);
  }, [selectedCard]);

  const handleChipsChange = (event) => {
    if (chips.length <= 10 && event.target.value.length <= 15) {
      setChips((prev) => [...prev, event.target.value]);
    } else {
      alert("Tag text limit 15 characters");
    }
  };

  const handleSaveClick = () => {
    if (front.trim() === "" || back.trim() === "") {
      alert("Card sides cannot be empty");
      return;
    }

    setLoading(true);

    if (checked) {
      editCard(selectedCard, { front, back, chips })
        .then(() => {
          addCard({
            topicId: topic_id,
            front: front,
            back: back,
            type: "CHALLENGE",
            tags: chips,
            auto: checked,
          });
        })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert("Unable to save changes");
        });
    } else {
      editCard(selectedCard, { front, back, chips })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert("Unable to save changes");
        });
    }
  };

  return (
    <Box p={8}>
      <Grid container spacing={2}>
        {/*Title*/}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          {selectedCard.type === "CONCEPT" ? (
            <Typography variant="h5">Edit Concept</Typography>
          ) : (
            <Typography variant="h5">Edit Exercise</Typography>
          )}
        </Grid>
        {/*Flash Cards Front/Back*/}
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
        {/*Tags*/}
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
        {/*Button Save*/}
        <Grid item xs={12}>
          {loading && <p>Loading</p>}
          {!loading && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
              sx={{ boxShadow: 4 }}
            >
              Save
            </Button>
          )}
        </Grid>
        {/*Checkbox Auto Generate Exercise*/}
        <Grid item xs={12}>
          {selectedCard.type === "CONCEPT" && (
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
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditView;
