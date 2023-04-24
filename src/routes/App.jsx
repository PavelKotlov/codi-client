import React from "react";
import ButtonAppBar from "../components/controllers/ButtonAppBar";
import { Box, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../components/Profile";
const App = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  return (
    <Box>
      <ButtonAppBar
        loginWithRedirect={loginWithRedirect}
        logout={logout}
        isAuthenticated={isAuthenticated}
        user={user}
      />
      {/*TODO: DELETE THE MESSAGE BELLOW*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Typography variant="h2">This is Index Page</Typography>
        <Typography>
          User is: {isAuthenticated ? "Logged In" : "Logged Out"}
        </Typography>
        <Typography>
          {isAuthenticated ? JSON.stringify(user) : "No Info"}
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
