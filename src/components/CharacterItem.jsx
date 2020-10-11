import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ character }) => {
  return <div>{character.name}</div>;
};

CharacterItem.propTypes = { character: PropTypes.object };

export default CharacterItem;
