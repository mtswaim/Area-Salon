import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {

  return (
    <header id='header'>
      <h1 id='title'>Aerea Salon</h1>
      <h2 id='address'>52 W 21st St New York, NY 10010 | 212.929.4680 </h2>
      <button id='book-button'>Book</button>
      <line id="line"></line>
    </header>
  )
}

