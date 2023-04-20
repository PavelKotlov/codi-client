import { Card, CardContent, IconButton } from '@mui/material';
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import HelpIcon from '@mui/icons-material/Help';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BarChart = ({ ease, onClick }) => {
  const easeFactors = ease.map((e) => e.ease_factor);
  const counts = ease.map((e) => e.count);

  const dummyEase = [1.8, 2.3, 2.4, 2.5, 2.65, 2.8];
  const dummyCounts = [1, 3, 8, 20, 4, 2];

  const option = {
    grid: {
      show: false,
      bottom: 5,
      top: 60,
      height: 200,
    },
    xAxis: {
      name: 'Ease',
      type: 'category',
      data: dummyEase,
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      name: 'Cards',
      type: 'value',
      show: true,
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
      },
    },
    series: [
      {
        data: dummyCounts,
        type: 'bar',
        barWidth: '40%',
      },
    ],
  };

  return (
    <Card sx={{ bgcolor: '#fff', display: 'flex' }}>
      <IconButton sx={{ borderRadius: 0 }} onClick={onClick}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <div style={{ width: '110%', height: 275 }}>
        <ReactEcharts option={option} />
      </div>
      <IconButton sx={{ borderRadius: 0 }} onClick={onClick}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>
  );
};

export default BarChart;
