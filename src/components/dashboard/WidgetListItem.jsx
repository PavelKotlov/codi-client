import { Paper, Grid, Typography } from "@mui/material";
import React from "react";

const WidgetListItem = ({ text, number, icon: Icon }) => {
  return (
    <Grid item xs={6} sm={3} lg={6}>
      <Paper
        elevation={3}
        sx={{
          bgcolor: "primaryCodi.dark", //'secondary.light'
          color: "white",
          p: 0.9,
          height: "90%",
          borderRadius: "15%",
          boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
        }}
      >
        <Icon sx={{ color: "accentsCodi.yellow" }} />
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="primaryCodi.main"
        >
          {number}
        </Typography>

        <Typography align="center">{text}</Typography>
      </Paper>
    </Grid>
  );
};

export default WidgetListItem;
