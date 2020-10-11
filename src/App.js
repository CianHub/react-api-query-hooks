import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setCharacters(result.data);
      setLoading(false);
    };
    fetchCharacters();
  }, [query]);

  return (
    <div className="container">
      <Header></Header>
      <Search setQuery={setQuery}></Search>
      <CharacterGrid characters={characters} loading={loading}></CharacterGrid>
    </div>
  );
};

export default App;
