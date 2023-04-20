import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./quiz.css";

export default function QuizComplete (props) {
  return (
    <Grid
    container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Box>
      <Typography gutterBottom variant="h4" color="textSecondary" className="complete-message">Well Done!</Typography>
      <Button variant="contained" color='secondary'>Exit</Button>
      </Box>
    </Grid>
  );
}
