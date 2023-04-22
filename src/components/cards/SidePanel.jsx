import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
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
import { topicContext } from "../../providers/TopicProvider";
import { useContext } from "react";
import { useState } from "react";
import SideBarList from "./SideBarList";
import QuizIcon from "@mui/icons-material/Quiz";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const SidePanel = (props) => {
  const { cards } = useContext(topicContext);
  const { selectCardFunc, selectTypeFunc } = props;

  return (
    <Box sx={{ height: "100%" }}>
      <CssBaseline />
      <Stack sx={{ height: "100%" }}>
        {/*Side Panel nav bar (breadcrumbs, X button*/}
        <Grid container sx={{ p: 1 }}>
          <Grid item>
            <IconButton aria-label="return to dashboard">
              {/*TODO: change the topic_id the link will return to correct link*/}
              <></>
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
        {/*Search and filter*/}
        <Grid container>
          <Grid item xs={11}>
            {/*TODO: need to return here and check see how to make the text inside take only a single line instead of multiple */}
            <></>
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
        {/*Add new cards section*/}
        <Stack direction={"row"} spacing={2} sx={{ p: 1 }}>
          <Tooltip title="add concept card">
            <IconButton
              onClick={() => {
                selectTypeFunc("NEW CONCEPT");
              }}
              aria-label="add concept card"
            >
              <LibraryBooksIcon color="primary" fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="add exercise card"
            onClick={() => {
              selectTypeFunc("NEW EXERCISE");
            }}
          >
            <IconButton aria-label="add exercise card">
              <QuizIcon color="primary" fontSize="large" />
            </IconButton>
          </Tooltip>
        </Stack>
        <Divider />
        {/*These are the cards within the deck listed*/}
        <SideBarList selectCardFunc={selectCardFunc} />
        <Divider />
      </Stack>
    </Box>
  );
};

export default SidePanel;
