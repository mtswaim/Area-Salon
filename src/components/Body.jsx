import React from 'react';
import Artists from './Artists';
import hero from '../images/Salon.jpg';
import cosmo from '../images/Cosmo.png'
import klein from '../images/Klein.png'
import knot from '../images/Knot.png'
import lucky from '../images/Lucky.png'
import bride from '../images/Bride.png'

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
        <img id='cosmo' src={cosmo}></img>
        <img id='Kleinfeld' src={klein}></img>
        <img id='knot' src={knot}></img>
        <img id='Lucky' src={lucky}></img>
        <img id='bride' src={bride}></img>
        <line id='line'></line>
      </div>
      <Artists />
    </main >
  )
}

