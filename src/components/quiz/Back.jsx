import { Button, Card, Grid, Typography, ButtonGroup, CardContent, CardActions, Divider} from '@mui/material';
import "./quiz.css";

export default function Back(props) {
  const { currentCard, handleClick } = props;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', wordWrap: "break-word"}}
    >
      <Card sx={{ borderRadius: '16px', boxShadow: 3 }} className='box-container'>
        <CardContent>
          <Typography gutterBottom variant="h4" color="textSecondary" className="card-box__front">{currentCard.front}</Typography>
        </CardContent>
        <Divider component="div" role="presentation"></Divider>
        <CardContent>
          <Typography gutterBottom variant="h5" color="textSecondary" className="card-box__back">{currentCard.back}</Typography>
        </CardContent>

        <CardActions>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
          >
            <ButtonGroup className="card-group__button" size='large' color='secondary'>
              <Button className="card-box__button" size='medium' variant="contained" onClick={() => handleClick('AGAIN')}>
              Again
              </Button>
              <Button className="card-box__button" size='medium' variant="contained" onClick={() => handleClick('HARD')}>
              Hard
              </Button>
              <Button className="card-box__button" size='medium' variant="contained" onClick={() => handleClick('GOOD')}>
              Good
              </Button>
              <Button className="card-box__button" size='medium' variant="contained" onClick={() => handleClick('EASY')}>
              Easy
              </Button>
            </ButtonGroup>
          </Grid>
        </CardActions>
      </Card>
    </Grid>

  );
}

