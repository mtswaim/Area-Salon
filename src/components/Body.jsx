import React from 'react';
import Artists from './Artists';
import hero from '../images/Hero.png';

export default function Body(props) {

  return (
    <main className="main">

      <div id='container'>
        <img id='hero-image' src={hero}></img>
        <div id='slogan-box'>
          <div id='slogan'>Area Salon NYC hair stylists, hair extensions experts and makeup artists specialize in a wide range of services.</div>
        </div>
      </div>
      <div id='magz'>
        <line id='line'></line>
        <img id='cosmo'></img>
        <img id='Kleinfeld'></img>
        <img id='knot'></img>
        <img id='Lucky'></img>
        <img id='bride'></img>
        <line id='line'></line>
      </div>
      <Artists />
    </main >
  )
}

