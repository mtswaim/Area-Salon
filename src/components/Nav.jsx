import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <main className="main">
      <nav>
        <Link to='/'>
          <a>Home</a>
        </Link>
        <Link to='#Artists'>
          <a>Artists</a>
        </Link>
        <a>Blog</a>
        <a>Contact Us</a>
        <a>About Us</a>
        <line></line>
      </nav>
    </main>
  )
}

