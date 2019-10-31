import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {

  return (
    <header>
      <h1>Application Name</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

