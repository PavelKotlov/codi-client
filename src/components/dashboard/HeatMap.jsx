import { Card, CardContent } from '@mui/material';
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './HeatMap.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const today = new Date();
const _today = new Date();
const oneYearAgo = new Date(_today.setDate(_today.getDate() - 365));
const oneDayAgoFormatted = oneYearAgo.toISOString().slice(0, 10);
const todayFormatted = today.toISOString().slice(0, 10);

const HeatMap = ({ reviews }) => {
  const counts = reviews.map((e) => e.count);
  const maxCount = Math.max(...counts);

  return (
    <Card>
      <CardContent>
        <CalendarHeatmap
          startDate={oneDayAgoFormatted}
          endDate={todayFormatted}
          values={reviews}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-${Math.ceil((value.count / maxCount) * 10)} tooltips`;
          }}
          tooltipDataAttrs={(value) => {
            return {
              'data-tooltip-content': `${value.count} reviews on ${value.date}`,
            };
          }}
        />
        <Tooltip anchorSelect='.tooltips' place='top'>
          Hello world!
        </Tooltip>
      </CardContent>
    </Card>
  );
};

export default HeatMap;
