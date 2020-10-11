import React from 'react';
import spinner from '../img/spinner.gif';

const Spinner = (props) => {
  return (
    <img
      src={spinner}
      alt="loading"
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    ></img>
  );
};

export default Spinner;
