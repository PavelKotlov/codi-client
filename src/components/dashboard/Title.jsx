import { Typography } from '@mui/material';
import React from 'react';

const Title = ({ name }) => {
  return (
    <Typography
      variant='h3'
      component='h1'
      sx={{
        color: '#271D30',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
      align='center'>
      {name}
    </Typography>
  );
};

export default Title;
