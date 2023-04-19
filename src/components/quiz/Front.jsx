import React from 'react';
import { createTheme, ThemeProvider} from '@mui/material';

export default function Front(props) {
  const { currentCard, onClick } = props;
  const codiTheme = createTheme({});

  return (
    <ThemeProvider theme={codiTheme}>
      <main className="quiz__card quiz__card--front">
        <section className="quiz__card-text">
          <h1>Front</h1>
          <h4>{currentCard.front}</h4>
        </section>
        <button variant="contained" onClick={onClick}>
        Show Answer
        </button>
      </main>
    </ThemeProvider>
    );
}

 