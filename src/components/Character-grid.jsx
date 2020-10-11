import React from 'react';

const CharacterGrid = ({ characters, loading }) => {
  return loading ? (
    <h1>loading</h1>
  ) : (
    <section className="cards">
      {characters.map((char) => (
        <h2>{char.name}</h2>
      ))}
    </section>
  );
};

export default CharacterGrid;
