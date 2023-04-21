import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { topicContext } from "../../providers/TopicProvider";
import ImageUpload from "./ImageUpload";

export default function TopicSettings() {
  const { state } = useContext(topicContext);

  return (
    <Grid item xs={12} sx={{ my: 2 }}>
      <Typography>Edit Topic</Typography>
      <Box>
        <TextField
          id="standard-multiline-static"
          label="Topic"
          multiline
          rows={1}
          fullWidth
          sx={{ my: 2 }}
          //TODO: replace value by state.topic.name
          value="JavaScript"
        />
        {/* Upload Image
        <input type="file" hidden /> */}
        <TextField
          id="standard-multiline-static"
          label="Maximum Cards"
          multiline
          rows={1}
          fullWidth
          sx={{ my: 2 }}
          //TODO: replace value by state.topic.max_cards
          value="10"
        />
        <ImageUpload />
      </Box>
      <Button size="medium">Save</Button>
    </Grid>
  );
}
