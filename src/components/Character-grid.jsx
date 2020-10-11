import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ characters, loading }) => {
  return loading ? (
    <h1>loading</h1>
  ) : (
    <section className="cards">
      {characters.map((char) => (
        <CharacterItem key={char.char_id} character={char}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
