import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAppBar from '../components/navbar/ButtonAppBar';
const App = () => {
  return (
    <>
      <ButtonAppBar />
      <Link to={`topics/`}>topics</Link>
    </>
  );
};

export default App;
