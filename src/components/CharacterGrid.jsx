import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

const CharacterGrid = ({ characters, loading }) => {
  return loading ? (
    <Spinner></Spinner>
  ) : (
    <section className="cards">
      {characters.map((char) => (
        <CharacterItem key={char.char_id} character={char}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
