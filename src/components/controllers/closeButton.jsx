import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { Link } from "react-router-dom";
const Close = ({ link }) => {
  return (
    <Link to={link} color="inherit">
      <IconButton
        sx={{ position: "absolute", left: 0, marginLeft: 3 }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
    </Link>
  );
};

export default Close;
