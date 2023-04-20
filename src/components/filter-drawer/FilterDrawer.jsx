import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Chip, Grid } from "@mui/material";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container rowSpacing={2} direction={"column"}>
        <Grid item xs={12}>
          <Grid container xs={12} gap={1} spacing={1} margin={1}>
            <Grid item>
              <Chip
                label="Clickable"
                variant="outlined"
                onClick={() => {
                  return null;
                }}
              />
            </Grid>
            <Grid item>
              <Chip
                label="Clickable"
                variant="outlined"
                onClick={() => {
                  return null;
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained">Filter</Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <FilterAltIcon />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
