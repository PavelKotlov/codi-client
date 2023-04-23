import React, { useState } from "react";
import TopicListItem from "./TopicListItem";
import { Autocomplete, Grid, InputAdornment, TextField } from "@mui/material";
import AddTopicButton from "./AddTopicButton";
import { Search } from "@mui/icons-material";
import Backdrop from "@mui/material/Backdrop";
import TopicForm from "../settings/TopicForm";

const TopicList = ({ state, setState }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  // If searchQuery is empty, then the includes() method will return true for every topic's name property,
  // because an empty string is included in every string.
  const filteredTopics = state.topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onOpen = () => {
    setOpen(!open);
  };

  const topicListItems = filteredTopics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        id={topic.id}
        name={topic.name}
        image_url={topic.image_url}
      />
    );
  });

  return (
    <Grid
      container
      spacing={5}
      sx={{
        bgcolor: "#E9f5ff",
      }}
    >
      <Grid
        container
        sx={{
          p: "2%",
          width: "40%",
          display: "block",
        }}
      >
        <Autocomplete
          options={state.topics}
          getOptionLabel={(topic) => topic.name}
          onInputChange={(event, newInputValue) => {
            setSearchQuery(newInputValue);
          }}
          clearOnBlur={false}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Topics"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search
                      sx={{
                        color: "gray.500",
                        marginRight: "5px",
                        marginBottom: "7px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid container spacing={5}>
        <AddTopicButton onOpen={onOpen} />
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
          open={open}
        >
          <TopicForm onOpen={onOpen} state={state} setState={setState} />
        </Backdrop>
        {topicListItems}
      </Grid>
    </Grid>
  );
};

export default TopicList;
