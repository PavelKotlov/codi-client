import { Grid } from '@mui/material';
import React from 'react';
import WidgetListItem from './WidgetListItem';
import { useContext } from 'react';
import { topicContext } from '../../providers/TopicProvider';

const WidgetList = () => {
  const { widgets } = useContext(topicContext);
  const widgetsComponents = widgets.map((widget) => {
    return (
      <WidgetListItem
        key={widget.id}
        text={widget.text}
        number={widget.number}
        icon={widget.icon}
      />
    );
  });
  return (
    <Grid container spacing={3}>
      {widgetsComponents}
    </Grid>
  );
};

export default WidgetList;
