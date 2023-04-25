import React, { useContext, useState } from "react";
import SideBarListItem from "./SideBarListItem";
import List from "@mui/material/List";
import { topicContext } from "../../providers/TopicProvider";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SideBarList = (props) => {
  const { cards } = useContext(topicContext);
  const { selectCardFunc } = props;
  const [searchQuery, setSearchQuery] = useState("");

  // If searchQuery is empty, then the includes() method will return true for every topic's name property,
  // because an empty string is included in every string.
  const filteredCards = cards.filter((card) =>
    card.front.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cardsList = filteredCards.map((card) => {
    return (
      <SideBarListItem
        key={card.id}
        card={card}
        selectCardFunc={selectCardFunc}
      />
    );
  });

  return (
    <Box>
      {/* TODO: change input text color and label color (on focus) */}
      <Autocomplete
        options={cards}
        getOptionLabel={(card) => card.front}
        onInputChange={(event, newInputValue) => {
          setSearchQuery(newInputValue);
        }}
        clearOnBlur={false}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Cards"
            variant="filled"
            sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", borderRadius: 2 }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Search
                    sx={{
                      color: "primaryCodi.main",
                      marginRight: "5px",
                      marginBottom: "7px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              sx: { color: "primaryCodi.main" },
            }}
          />
        )}
        sx={{
          mx: 4,
          marginTop: 2,
        }}
      />
      <List
        sx={{
          overflow: "auto",
          maxHeight: 700,
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {cardsList}
      </List>
    </Box>
  );
};

export default SideBarList;
