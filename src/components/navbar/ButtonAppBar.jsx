import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

const ButtonAppBar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Codi
          </Typography>
          <Button
            color="inherit"
            size="large"
            onClick={() => {
              console.log("Hi");
            }}
          >
            Login
          </Button>
          <Button color="inherit" size="large">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
