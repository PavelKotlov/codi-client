import { Grid } from '@mui/material';
import React from 'react';
import WidgetListItem from './WidgetListItem';

const WidgetList = (props) => {
  const widgets = props.widgets.map((widget) => {
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
      {widgets}
    </Grid>
  );
};

export default WidgetList;
