import { Grid, CircularProgress, Skeleton } from '@mui/material';
import React from 'react';
import WidgetList from './WidgetList';
import BarChart from './BarChart';
import Gauge from './Gauge';
import HeatMap from './HeatMap';

import { useState, useContext } from 'react';

import { topicContext } from '../../providers/TopicProvider';

const Stats = () => {
  const { loading, ease, reviews, widgets, maturityPercentage } =
    useContext(topicContext);

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
          <WidgetList widgets={widgets} />
        )}
      </Grid>

      <Grid item xs={12} lg={8}>
        {graph === 'gauge' && !loading && (
          <Gauge
            maturityPercentage={maturityPercentage}
            onClick={switchGraph}
          />
        )}

        {graph === 'bar' && !loading && (
          <BarChart ease={ease} onClick={switchGraph} />
        )}

        {loading && (
          <Skeleton animation='wave' variant='rounded' height={300} />
        )}
      </Grid>

      <Grid item xs={12} lg={12}>
        {loading ? (
          <Skeleton animation='wave' variant='rounded' height={150} />
        ) : (
          <HeatMap reviews={reviews} />
        )}
      </Grid>
    </Grid>
  );
};

export default Stats;
