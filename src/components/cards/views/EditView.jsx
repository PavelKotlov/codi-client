import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { topicContext } from "../../../providers/TopicProvider";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const EditView = (props) => {
  const { setView, selectedCard } = props;
  const { editCard, addCard, deleteCard, topic } = useContext(topicContext);

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

  // const handleChipsChange = (event) => {
  //   if (chips.length <= 10 && event.target.value.length <= 15) {
  //     setChips((prev) => [...prev, event.target.value]);
  //   } else {
  //     alert("Tag text limit 15 characters");
  //   }
  // };

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
            topicId: topic.id,
            front: front,
            back: back,
            type: "CHALLENGE",
            tags: chips,
            auto: checked,
          }).then(() => {
            setLoading(false);
          });
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

  const handleDeleteClick = () => {
    setLoading(true);
    deleteCard(selectedCard)
      .then(() => {
        setLoading(false);
        setView("DEFAULT");
      })
      .catch((err) => {
        setLoading(false);
        alert("Unable to delete card");
      });
  };
  return (
    <Box p={8}>
      <Grid container spacing={2} px={20}>
        {/*Title*/}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          {selectedCard.type === "CONCEPT" ? (
            <Typography variant="h3" color="primaryCodi.dark">
              Edit Concept
            </Typography>
          ) : (
            <Typography variant="h3" color="primaryCodi.dark">
              Edit Exercise
            </Typography>
          )}
        </Grid>
        {/*Flash Cards Front/Back*/}
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
        {/*TODO: REDO Tags*/}
        {/* <Grid item xs={12}>
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
            sx={{ boxShadow: 4, bgcolor: "primaryCodi.light" }}
          /> 
        </Grid>*/}
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
                  color="secondary"
                />
              }
              label="Auto Generate Exercise"
              sx={{ color: "primaryCodi.dark" }}
            />
          )}
        </Grid>
        {/*Button Save*/}
        <Grid item xs={12}>
          {loading && <CircularProgress />}
          {!loading && (
            <>
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
                Save
              </Button>
              <IconButton
                aria-label="delete"
                size="large"
                sx={{ color: "primaryCodi.dark" }}
              >
                <DeleteIcon fontSize="inherit" onClick={handleDeleteClick} />
              </IconButton>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditView;
