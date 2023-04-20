import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return <Link to={`topics/:topic_id/dashboard/cards`}>topics</Link>;
};

export default App;
