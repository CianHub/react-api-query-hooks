import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [text, setText] = useState('');
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search for a character"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </form>
    </section>
  );
};

Search.propTypes = {};

export default Search;
