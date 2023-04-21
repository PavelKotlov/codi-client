import { Card, CardMedia, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TopicListItem = ({ name, image_url, id }) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Link to={`/topics/${id}/dashboard`} color='inherit'>
        <Card elevation={4} sx={{ borderRadius: '15%' }}>
          <CardMedia
            sx={{ height: 0, paddingTop: '100%' }}
            image={image_url}
            title={name}
          />
        </Card>
      </Link>
    </Grid>
  );
};

export default TopicListItem;
