import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
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
            <img
              src={
                `${process.env.PUBLIC_URL}` +
                "/assets/images/light/browse/lady.png"
              }
              width={650}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DefaultView;
