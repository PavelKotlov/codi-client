import { Grid, Button, Badge } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import React from 'react';
import { useContext } from 'react';
import { topicContext } from '../../providers/TopicProvider';
const Buttons = () => {
  const { quizCardsCount } = useContext(topicContext);
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Badge
          badgeContent={quizCardsCount}
          color='primary'
          sx={{ width: '100%' }}>
          <Button
            sx={{ bgcolor: '#D84177' }}
            fullWidth
            variant='contained'
            startIcon={<QuizIcon />}
            onClick={() => {
              console.log('Go to quiz view');
            }}>
            Study Now
          </Button>
        </Badge>
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{ bgcolor: '#27E0C0' }}
          fullWidth
          variant='contained'
          color='secondary'
          startIcon={<FormatListBulletedIcon />}
          onClick={() => {
            console.log('Go to browser');
          }}>
          Browse
        </Button>
      </Grid>
    </Grid>
  );
};

export default Buttons;
