import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect;
  return (
    <div className="container">
      <Header></Header>
    </div>
  );
};

export default App;
