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
    <Box sx={{ flexGrow: 1, mx: 7 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "rgba(0,0,0,0)", color: "primaryCodi.dark" }}
        elevation={0}
      >
        <Toolbar>
          <Box variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={
                `${process.env.PUBLIC_URL}` + "/assets/icons/dark/codiLogo.png"
              }
              width={80}
              alt="logo"
              component="div"
              sx={{ flexGrow: 1 }}
            />
          </Box>

          {!isAuthenticated && (
            <Button
              sx={{
                color: "primaryCodi.dark",
                "&:hover": {
                  color: "accentsCodi.pink",
                },
              }}
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
              <Typography
                sx={{
                  color: "primaryCodi.dark",
                  "&:hover": {
                    color: "accentsCodi.pink",
                  },
                }}
              >
                Welcome {user.given_name}!
              </Typography>
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
              sx={{
                color: "primaryCodi.dark",
                "&:hover": {
                  color: "accentsCodi.pink",
                },
                ml: 3,
              }}
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
