import React from 'react';
import { Button, Card, Grid, Typography, CardContent, CardActions, createTheme} from '@mui/material';
import "./styles.css";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import useApplicationData from '../../hooks/useApplicationData';

export default function Front(props) {
  const { currentCard, onClick } = props;
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
        <Card sx={{ borderRadius: '16px', boxShadow: 2 }} className='box-container'>
          <CardContent>
            <Typography gutterBottom variant="h4" className='topic'>{state.topic.name}</Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h4" color="textSecondary" className="card-box__front">{currentCard.front}</Typography>
          </CardContent>
          
          <CardActions>
            {currentCard.type === 'CONCEPT' &&
            <Button className='answer-button' size="small" onClick={onClick}><KeyboardDoubleArrowRightIcon className='arrow-icon'/>
            </Button>}
            {currentCard.type === 'CHALLANGE' &&
            <Button className="answer-button" onClick={onClick}>
              <KeyboardDoubleArrowRightIcon className='arrow-icon'/>
            </Button>}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}


