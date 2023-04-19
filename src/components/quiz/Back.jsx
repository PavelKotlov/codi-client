import { createTheme, ThemeProvider} from '@mui/material';

export default function Back(props) {
  const { currentCard, handleClick } = props;
  const codiTheme = createTheme({});

  return (
    <ThemeProvider theme={codiTheme}>
      <main className="quiz__card quiz__card--back">
        <section className="quiz__card-text">
          <h1>Back</h1>
          <h4>{currentCard.front}</h4>
          <h4>{currentCard.back}</h4>
        </section>
      <button className="quiz__card-again" onClick={() => handleClick('AGAIN')} variant="contained" color="primary">
      Again
      </button>
      <button className="quiz__card-hard" onClick={() => handleClick('HARD')} variant="contained" color="primary">
      Hard
      </button>
      <button className="quiz__card-good" onClick={() => handleClick('GOOD')} variant="contained" color="primary">
      Good
      </button>
      <button className="quiz__card-easy" onClick={() => handleClick('EASY')} variant="contained" color="primary">
      Easy
      </button>
      </main>
    </ThemeProvider>
    );
}
