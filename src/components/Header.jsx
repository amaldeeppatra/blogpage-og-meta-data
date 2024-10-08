import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Simple Blog</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Post</Link>
      </nav>
    </header>
  );
};

export default Header;
