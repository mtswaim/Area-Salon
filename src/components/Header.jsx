import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {

  return (
    <header>
      <h1>Area Salon</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/a">Artists</Link>
      </nav>
    </header>
  )
}

