import React from "react";
import { LinearProgress } from "@mui/material";
import "./quiz.css";

export default function ProgressBar(props) {
  const { progress } = props;

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{ height: 20, borderRadius: 2, bgcolor: "success.light" }}
      color="success"
    />
  );
}
