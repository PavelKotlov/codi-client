import { Grid, Typography } from "@mui/material";
import React from "react";

export default function QuizComplete (props) {
  return (
    <Grid><Typography gutterBottom variant="h4" color="textSecondary" className="complete-message">Congratulations!</Typography></Grid>
  );
}