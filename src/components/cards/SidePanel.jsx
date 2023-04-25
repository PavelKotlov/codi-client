import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import {
  Autocomplete,
  Breadcrumbs,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "../filter-drawer/FilterDrawer";
import { topicContext } from "../../providers/TopicProvider";
import { useContext } from "react";
import SideBarList from "./SideBarList";
import QuizIcon from "@mui/icons-material/Quiz";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";
import NavMenu from "../controllers/menu";
import { Search } from "@mui/icons-material";

const SidePanel = (props) => {
  const { topic } = useContext(topicContext);
  const { selectCardFunc, selectTypeFunc, currentCard } = props;

  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "primaryCodi.dark",
        boxShadow: "10px 0px 20px rgba(62, 32, 102, .5)",
      }}
    >
      <CssBaseline />
      <Stack sx={{ height: "100%" }}>
        {/*Side Panel nav bar (breadcrumbs, X button*/}
        <Grid container sx={{ p: 1 }}>
          <Grid item>
            <Link to={`/topics/${topic.id}/dashboard`}>
              <IconButton
                sx={{ p: 1, color: "primaryCodi.main" }}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Link>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", paddingLeft: 2 }}
          >
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ color: "accentsCodi.yellow" }}
            >
              <Link to={"/topics"} underline="hover">
                Topics
              </Link>
              <Link
                to={`/topics/${topic.id}/dashboard`}
                underline="hover"
                color="inherit"
              >
                Dashboard
              </Link>
              <Typography color="accentsCodi.yellow">Cards</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
        {/*Search and filter*/}
        <Grid container>
          {/* <Grid item xs={11}>
            TODO: Make sure it brings back onle the correct card
            <NavMenu showSettings={true} />
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
          </Grid> */}
        </Grid>
        {/*Add new cards section*/}
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ p: 1 }}
          justifyContent={"space-around"}
        >
          <Tooltip title="add concept card">
            <IconButton
              onClick={() => {
                selectTypeFunc("NEW CONCEPT");
              }}
              aria-label="add concept card"
            >
              <Button
                variant="text"
                startIcon={
                  <LibraryBooksIcon
                    sx={{ color: "accentsCodi.green" }}
                    fontSize="large"
                  />
                }
                size="large"
                sx={{ color: "accentsCodi.green" }}
              >
                Concept
              </Button>
            </IconButton>
          </Tooltip>
          <Tooltip
            title="add exercise card"
            onClick={() => {
              selectTypeFunc("NEW EXERCISE");
            }}
          >
            <IconButton aria-label="add exercise card">
              <Button
                variant="text"
                startIcon={
                  <QuizIcon
                    sx={{ color: "accentsCodi.green" }}
                    fontSize="large"
                  />
                }
                size="large"
                sx={{ color: "accentsCodi.green" }}
              >
                Exercise
              </Button>
            </IconButton>
          </Tooltip>
        </Stack>
        {/*These are the cards within the deck listed*/}
        <SideBarList
          selectCardFunc={selectCardFunc}
          currentCard={currentCard}
        />
      </Stack>
    </Box>
  );
};

export default SidePanel;
