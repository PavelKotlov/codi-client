import { Typography } from "@mui/material";
import React from "react";

const Title = ({ name }) => {
  return (
    <Typography
      variant="h3"
      component="h1"
      sx={{
        color: "primaryCodi.main",
        fontWeight: "bold",
      }}
      align="center"
    >
      {name}
    </Typography>
  );
};

export default Title;
