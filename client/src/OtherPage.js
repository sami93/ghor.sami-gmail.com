import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Im some other pag e
      <Link to="/">Go back to home page!</Link>
    </div>
  );
};
