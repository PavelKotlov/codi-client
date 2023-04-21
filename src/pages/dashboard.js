import { Grid } from '@mui/material';
import React from 'react';
import Title from '../components/dashboard/Title';
import Stats from '../components/dashboard/Stats';
import Buttons from '../components/dashboard/Buttons';
import NavMenu from '../components/controllers/menu';
import CloseButton from '../components/controllers/closeButton';
import { useContext } from 'react';
import { topicContext } from '../providers/TopicProvider';

const Dashboard = () => {
  const { topic } = useContext(topicContext)

  return (
    <>
      <NavMenu />
      <CloseButton link='/topics' />
      <Grid
        container
        columnSpacing={3}
        alignItems='center'
        sx={{
          height: '100vh',
          p: '2%',
          bgcolor: '#E9f5ff',
        }}>
        <Grid item xs={12} md={5}>
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            direction='column'
            rowSpacing={7}>
            <Grid item>
              <Title name={topic.name} />
            </Grid>
            <Grid item>
              <Buttons />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} alignItems='center' sx={{ px: '10%' }}>
          <Stats />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
