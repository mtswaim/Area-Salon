import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <div id='nav-box'>
      <nav id='nav'>
        <Link to='/'>
          <a>Home</a>
        </Link>
        <a href='#artists'>
          <a>Artists</a>
        </a>
        <a>Blog</a>
        <a>Contact Us</a>
        <a>About Us</a>
      </nav>
      <line id='line'></line>
    </div>
  )
}

