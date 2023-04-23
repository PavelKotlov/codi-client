import React from "react";
import { Card, CardMedia, Grid, CardActionArea } from "@mui/material";
const AddTopicButton = ({ onOpen }) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card
        elevation={4}
        sx={{ borderRadius: "15%", "&::hover": { cursor: "pointer" } }}
        onClick={() => {
          onOpen();
        }}
      >
        <CardActionArea>
        <CardMedia
          sx={{ height: 0, paddingTop: "100%" }}
          image={process.env.PUBLIC_URL + "/plus-light.png"}
          title="Add a new Topic"
        />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default AddTopicButton;
