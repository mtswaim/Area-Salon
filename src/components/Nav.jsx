import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <div id='nav-box'>
      <nav id='nav'>
        <Link to='/'>
          <a id="nav-link">Home</a>
        </Link>
        <a href='#artists'>
          <a id="nav-link">Artists</a>
        </a>
        <a id="nav-link">Blog</a>
        <a id="nav-link">Contact Us</a>
        <a id="nav-link">About Us</a>
      </nav>
      <line id='line'></line>
    </div>
  )
}

