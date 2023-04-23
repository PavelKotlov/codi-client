import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import image from "./Capture5.PNG";
import { Box, Grid, Typography } from "@mui/material";

const DefaultView = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sx={{ px: 20 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "lightslategray" }}
          >
            Select or Create Card...
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          {/*TODO: add an alt tag to the final image*/}
          <Box>
            <img src={image} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DefaultView;
