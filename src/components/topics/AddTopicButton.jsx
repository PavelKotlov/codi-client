import React from "react";
import { Card, CardMedia, Grid, CardActionArea } from "@mui/material";
const AddTopicButton = ({ onOpen }) => {
  return (
    <Grid item xs={12} md={6} lg={3} sx={{ p: 2.5 }}>
      <Card
        sx={{
          borderRadius: "15%",
          "&::hover": { cursor: "pointer" },
          boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
        }}
        onClick={() => {
          onOpen();
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ height: 0, paddingTop: "100%" }}
            image={process.env.PUBLIC_URL + "/assets/icons/light/plus.png"}
            title="Add a new Topic"
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default AddTopicButton;
