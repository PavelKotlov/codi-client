import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Link } from "react-router-dom";
const Close = ({ link, isDefault }) => {
  const type = isDefault ? "primaryCodi.dark" : "primaryCodi.main";
  return (
    <Link to={link}>
      <IconButton
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          marginLeft: 3,
          color: type,
        }}
        aria-label="close"
        size="large"
      >
        <CloseIcon fontSize="large" />
      </IconButton>
    </Link>
  );
};

export default Close;
