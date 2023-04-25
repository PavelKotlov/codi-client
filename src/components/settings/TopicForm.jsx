import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect, useContext } from "react";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { UserContext } from "../../providers/UserProvider";

export default function TopicForm(props) {
  const { token } = useContext(UserContext);
  const state = props.state;
  const setState = props.setState;
  const [name, setName] = useState("");
  const [maxCards, setMaxCards] = useState(25);
  const [imageURL, setImageURL] = useState("");

  const resetForm = () => {
    setName("");
    setMaxCards(25);
    setImageURL("");
  };

  // Should this be an if there is id then run ???
  useEffect(() => {
    console.log(Object.keys(props));
    const response = axios
      .get(`/api/topics/${props.topic_id}`)
      .then((response) => {
        console.log(response.body);
        setName(response.body.name);
        setMaxCards(response.body.max_cards);
        setImageURL(response.body.image_url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.topic_id]);

  //TODO: update value for edit topic
  const handleSave = async () => {
    // If no id then add
    if (!props.topic_id) {
      const response = await axios.post(
        `/api/topics`,
        {
          name: name,
          image_url: imageURL,
          max_cards: Number(maxCards),
          //TODO: change to logged in user
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setState({
        ...state,
        topics: [response.data, ...state.topics],
      });

      props.onOpen();
    } else {
      // If id then edit
      const response = await axios.patch(
        `/api/topics/${props.topic_id}`,
        {
          name: name,
          image_url: imageURL,
          max_cards: Number(maxCards),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setState({
        ...state,
        topics: state.topics.map((topic) =>
          topic.id === response.data.id ? response.data : topic
        ),
      });

      props.onOpen();
    }

    // const handleTopic = async (card) => {
    //   await axios.delete(
    //     `/api/topics/${card.topicId}/`
    //   );

    // }
    resetForm();
  };
  return (
    <Box>
      <Paper elevation={5} sx={{ bgcolor: "White", p: 4, borderRadius: 5 }}>
        <Grid container direction="column">
          <Grid item sx={{ py: 2 }}>
            <Typography variant="h5">Create New Topic</Typography>
          </Grid>

          <Grid item xs={8}>
            <TextField
              id="standard-multiline-static"
              label="Topic Name"
              multiline
              rows={1}
              fullWidth
              sx={{ my: 2 }}
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

            <TextField
              id="standard-multiline-static"
              label="Maximum Cards per Study Session"
              fullWidth
              sx={{ my: 2 }}
              inputProps={{
                type: "number",
                min: 0,
                step: 1,
              }}
              value={maxCards}
              onChange={(event) => {
                setMaxCards(event.target.value);
              }}
            />

            <TextField
              id="standard-multiline-static"
              label="Image URL"
              multiline
              rows={1}
              fullWidth
              sx={{ my: 2 }}
              value={imageURL}
              onChange={(event) => {
                setImageURL(event.target.value);
              }}
            />
          </Grid>
          <Grid item sx={{ py: 2 }}>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{ marginLeft: 2 }}
              onClick={() => {
                props.onOpen();
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
