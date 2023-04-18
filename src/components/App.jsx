import React from 'react';
import './App.css';
import { createTheme, ThemeProvider} from '@mui/material';
import ButtonAppBar from './navbar';

const codiTheme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={codiTheme}>
      <ButtonAppBar />
      
    </ThemeProvider>
  );
}

export default App;
