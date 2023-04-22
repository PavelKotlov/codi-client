import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuizIcon from "@mui/icons-material/Quiz";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";

import {
  Autocomplete,
  Breadcrumbs,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
  createFilterOptions,
} from "@mui/material";
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "../filter-drawer/FilterDrawer";

const filterOptions = createFilterOptions({
  limit: 5,
  trim: true,
});

const SidePanel = (props) => {
  const cards = props.cards;
  const listCardsInOrder = (cardsArray) => {
    const sortedCards = cardsArray.map((card) => (
      <ListItem key={card.front} disablePadding>
        <Tooltip title={card.front}>
          <ListItemButton
            onClick={() => {
              changeView(
                card.type === "CONCEPT" ? "EDIT CONCEPT" : "EDIT EXERCISE"
              );
              populateFlashCard(card.front, card.back);
            }}
          >
            <ListItemIcon>
              {card.type === "CONCEPT" ? <LibraryBooksIcon /> : <QuizIcon />}
            </ListItemIcon>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{
                      display: "block",
                      maxWidth: "100%",
                    }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    noWrap
                  >
                    {card.front}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItemButton>
        </Tooltip>
      </ListItem>
    ));

    return sortedCards;
  };

  const changeView = (view) => {
    props.onCreate(view);
  };

  const populateFlashCard = (frontSide, backSide) => {
    props.onPopulate((prev) => ({ ...prev, front: frontSide, back: backSide }));
  };

  return (
    <Box sx={{ height: "100%" }}>
      <CssBaseline />
      <Stack sx={{ height: "100%" }}>
        <Grid container sx={{ p: 1 }}>
          <Grid item>
            <IconButton aria-label="return to dashboard">
              {/*TODO: change the topic_id the link will return to correct link*/}
              <Link to={`/topics/${2525825}/dashboard`}>
                <CloseIcon />
              </Link>
            </IconButton>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", paddingLeft: 2 }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link to={"/topics"} underline="hover" color="inherit">
                Topics
              </Link>
              <Link
                to={"/topics/:topic_id/dashboard"}
                underline="hover"
                color="inherit"
              >
                Dashboard
              </Link>
              <Typography color="text.primary">Cards</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={11}>
            {/*TODO: need to return here and check see how to make the text inside take only a single line instead of multiple */}
            <Autocomplete
              id="free-solo-2-demo"
              sx={{
                margin: 2,
              }}
              autoComplete
              options={cards.map((card) => card.front)}
              filterOptions={filterOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search cards"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
              componentsProps={{ paper: { p: 3 } }}
            />
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: 2,
            }}
          >
            <Box sx={{ Padding: 5 }}>
              <IconButton>
                <SwipeableTemporaryDrawer />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Stack direction={"row"} spacing={2} sx={{ p: 1 }}>
          <Tooltip title="add concept card">
            <IconButton
              onClick={() => {
                changeView("NEW CONCEPT");
                populateFlashCard("", "");
              }}
              aria-label="add concept card"
            >
              <LibraryBooksIcon color="primary" fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip
            onClick={() => {
              changeView("NEW EXERCISE");
              populateFlashCard("", "");
            }}
            title="add exercise card"
          >
            <IconButton aria-label="add exercise card">
              <QuizIcon color="primary" fontSize="large" />
            </IconButton>
          </Tooltip>
        </Stack>
        <Divider />
        <List
          sx={{
            overflow: "auto",
            maxHeight: 700,
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {listCardsInOrder(cards)}
        </List>
        <Divider />
      </Stack>
    </Box>
  );
};

export default SidePanel;
