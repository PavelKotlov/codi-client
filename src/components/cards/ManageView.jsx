import React, { useState } from "react";
import {
  Box,
  Button,
  Switch,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";
import CardTagsItem from "../tags/CardTagsItem";

const ManageView = (props) => {
  const pageTitle = props.title;
  const flasCardSides = props.sides;
  const [auto, setAuto] = useState(false);

  const changeToAutoMode = () => {
    const condition = auto ? false : true;
    setAuto(condition);
    return;
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "80%", height: "80%" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={2}
                sx={{ display: "flex", justifyContent: "start" }}
              >
                {pageTitle === "Add New Concept" && (
                  <React.Fragment>
                    <Typography variant="h5">Auto</Typography>
                    <Switch
                      color="success"
                      onChange={changeToAutoMode}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </React.Fragment>
                )}
              </Grid>
              <Grid
                item
                xs={pageTitle === "Add New Concept" ? 8 : 12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography variant="h5">{pageTitle}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ my: 2 }}>
            {!auto && (
              <Box>
                <TextField
                  id="standard-multiline-static"
                  label="Card Front"
                  multiline
                  rows={7}
                  fullWidth
                  sx={{ my: 2 }}
                  value={flasCardSides.front ? flasCardSides.front : ""}
                />
                <TextField
                  id="standard-multiline-static"
                  label="Card Back"
                  multiline
                  rows={7}
                  fullWidth
                  sx={{ my: 2 }}
                  value={flasCardSides.back ? flasCardSides.back : ""}
                />
              </Box>
            )}
            {auto && (
              <Box>
                <TextField
                  id="standard-multiline-static"
                  label="Note"
                  multiline
                  rows={18}
                  fullWidth
                  sx={{ my: 2 }}
                />
              </Box>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Grid
              container
              direction={"column"}
              rowSpacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item>{!auto && <CardTagsItem />}</Grid>
              <Grid item>
                <Button variant="contained">
                  {!auto && "SAVE"}
                  {auto && "GENERATE"}
                </Button>
                {pageTitle === "Edit Concept" && (
                  <Button sx={{ mx: 2 }} variant="contained">
                    GENERATE EXERCISE
                  </Button>
                )}
              </Grid>
              <Grid item>
                {!auto && pageTitle === "Add New Concept" && (
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Generate Exercise"
                    />
                  </FormGroup>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ManageView;
