import React from 'react';
import { Button, Card, Grid, Typography, CardContent, CardActions} from '@mui/material';
import "./quiz.css";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import useApplicationData from '../../hooks/useApplicationData';
import ProgressBar from './ProgressBar';

export default function Front(props) {
  const { currentCard, onClick, progress } = props;
  const { state } = useApplicationData();

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={2}>
        <Card sx={{ borderRadius: '16px', boxShadow: 3 }} className='box-container'>
          <CardContent>
            <Typography gutterBottom variant="h4" className='topic'>{state.topic.name}</Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h4" color="textSecondary" className="card-box__front">{currentCard.front}</Typography>
          </CardContent>
          
          <CardActions>
            {currentCard.type === 'CONCEPT' &&
            <Button className='answer-button'  size="small" onClick={onClick}>View Answer<KeyboardDoubleArrowRightIcon className='arrow-icon'/>
            </Button>}
            {currentCard.type === 'CHALLENGE' &&
            <Button className="answer-button" onClick={onClick}>
              View Answer<KeyboardDoubleArrowRightIcon className='arrow-icon'/>
            </Button>}
          </CardActions>
        </Card>
        <ProgressBar progress={progress}/>
      </Grid>
    </Grid>
  );
}


