import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const ButtonAppBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Codi
          </Typography>
          {!isAuthenticated && (
            <Button
              color="inherit"
              size="large"
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Login
            </Button>
          )}
          {isAuthenticated && (
            <Link to="/topics">
              <Typography>Welcome {user.given_name}!</Typography>
            </Link>
          )}
          {isAuthenticated && (
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              sx={{ ml: 3 }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
