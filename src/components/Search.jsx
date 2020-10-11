import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search for a character"
          autoFocus
        ></input>
      </form>
    </section>
  );
};

Search.propTypes = {};

export default Search;
