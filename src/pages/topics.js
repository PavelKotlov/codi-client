import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TopicList from '../components/topics/TopicList';
import Loading from '../components/Loading';
import NavMenu from '../components/controllers/menu';
import { Box } from '@mui/material';
import CloseButton from '../components/controllers/CloseButton';
import { UserContext } from '../providers/UserProvider';

const Topics = () => {
  const { loading } = useContext(UserContext);

  return (
    <Box
      height='100vh'
      bgcolor='background.light'
      sx={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/assets/images/light/topics-bg.png'
        })`,
        backgroundSize: 'cover',
      }}>
      <CloseButton link={'/'} isDefault={true} />
      <NavMenu showSettings={false} />
      {loading ? <Loading /> : <TopicList />}
    </Box>
  );
};

export default Topics;
