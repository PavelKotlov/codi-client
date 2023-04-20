import React from 'react';
import { createTheme, ThemeProvider} from '@mui/material';
import Quiz from '../pages/quiz';

const codiTheme = createTheme({});


const App = () => {

  return (
    <ThemeProvider theme={codiTheme}>
      <Quiz />
    </ThemeProvider>
  );
}

export default App;
