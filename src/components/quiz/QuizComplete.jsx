import { Button, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./quiz.css";
import { useNavigate } from "react-router-dom";

export default function QuizComplete (props) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/topics/:topic_id/dashboard`; 
    navigate(path);
  }

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
      <Button variant="contained" color='secondary' onClick={routeChange}>Exit</Button>
      </Box>
    </Grid>
  );
}