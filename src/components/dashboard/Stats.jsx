import React from 'react';
import { useState, useContext } from 'react';
import { topicContext } from '../../providers/TopicProvider';
import WidgetList from './WidgetList';
import BarChart from './BarChart';
import Gauge from './Gauge';
import HeatMap from './HeatMap';
import { Grid, Skeleton } from '@mui/material';

const Stats = () => {
  const { loading } = useContext(topicContext);

  const [graph, setGraph] = useState('gauge');
  const switchGraph = function () {
    graph === 'gauge' ? setGraph('bar') : setGraph('gauge');
  };

  return (
    <Grid container spacing={2} alignItems='stretch'>
      <Grid item xs={12} lg={4}>
        {loading ? (
          <Skeleton animation='wave' variant='rounded' height={300} />
        ) : (
          <WidgetList />
        )}
      </Grid>

      <Grid item xs={12} lg={8}>
        {!loading && graph === 'gauge' && <Gauge onClick={switchGraph} />}

        {!loading && graph === 'bar' && <BarChart onClick={switchGraph} />}

        {loading && (
          <Skeleton animation='wave' variant='rounded' height={300} />
        )}
      </Grid>

      <Grid item xs={12} lg={12}>
        {loading ? (
          <Skeleton animation='wave' variant='rounded' height={150} />
        ) : (
          <HeatMap />
        )}
      </Grid>
    </Grid>
  );
};

export default Stats;
