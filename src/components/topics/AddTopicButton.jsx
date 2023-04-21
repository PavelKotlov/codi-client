import { Card, CardMedia, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AddTopicButton = ({}) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      {/* //TODO: show popup or link to it or whatever */}
      <Link to={`/topics`} color='inherit'>
        <Card elevation={4} sx={{ borderRadius: '15%' }}>
          <CardMedia
            sx={{ height: 0, paddingTop: '100%' }}
            image={process.env.PUBLIC_URL + '/plus-light.png'}
            title='Add a new Topic'
          />
        </Card>
      </Link>
    </Grid>
  );
};

export default AddTopicButton;
