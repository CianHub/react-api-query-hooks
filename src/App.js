import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/`);
      console.log(result.data);
    };
    fetchCharacters();
  }, []);

  return (
    <div className="container">
      <Header></Header>
    </div>
  );
};

export default App;
