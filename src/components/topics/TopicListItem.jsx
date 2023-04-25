import { Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TopicListItem = ({ name, image_url, id }) => {
  return (
    <Grid item xs={12} md={6} lg={3} sx={{ p: 2.5 }}>
      <Link to={`/topics/${id}/dashboard`} color="inherit">
        <Card
          sx={{
            borderRadius: "15%",
            boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
          }}
        >
          <CardMedia
            sx={{ height: 0, paddingTop: "100%" }}
            image={image_url}
            title={name}
          />
        </Card>
      </Link>
    </Grid>
  );
};

export default TopicListItem;
