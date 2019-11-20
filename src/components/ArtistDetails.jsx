import React, { useState } from 'react';
import chair1 from '../images/chair1.png';
import chair2 from '../images/chair2.png';
import chair3 from '../images/chair3.png';
import chair4 from '../images/chair4.png';
import chair5 from '../images/chair5.png';
import chair6 from '../images/chair6.png';
import w3 from '../images/w3.png';

import Slider from 'infinite-react-carousel';

export default function ArtistDetails(props) {

  const [backGround, setbackGround] = useState(chair1);
  let divStyle = { backgroundImage: `url(${backGround})` };
  const settings = {
    centerMode: true,
    centerPadding: 20,
    rows: 1,
    slidesPerRow: 3
  };
  return (
    <div id='artist-box'>
      <div id="artist-box-pics">
        <div id="artist-box-pics-main-pic" style={divStyle} />
        <Slider {...settings}>
          <div>
            <img className="details-img" src={chair1} onClick={() => setbackGround(chair1)} alt="none"></img>
          </div>
          <div>
            <img className="details-img" src={chair2} onClick={() => setbackGround(chair2)} alt="none"></img>
          </div>
          <div>
            <img className="details-img" onClick={() => setbackGround(chair3)} src={chair3} alt="none"></img>
          </div>
          <div>
            <img className="details-img" onClick={() => setbackGround(chair4)} src={chair4} alt="none"></img>
          </div>
          <div>
            <img className="details-img" onClick={() => setbackGround(chair5)} src={chair5} alt="none"></img>
          </div>
          <div>
            <img className="details-img" onClick={() => setbackGround(chair6)} src={chair6} alt="none"></img>
          </div>
        </Slider>
      </div>
      <div id="artist-box-info">
        <img id="profile-pic" src={w3} alt="none" />
        <p id="name">Debby</p>
        <p className="desc">Debby is our allstar hairstylist. She specialize in
a wide range of services like Hair Extensions,
Haircuts, Wedding Makeup, Keratin Treatment,
Balayage Highlights, Ombre Hair Color,
Japanese Hair Straightening, Updo's and Bridal Hair,
Olaplex Bond Multiplier.</p>
        <p className="desc">She is dedicated to transforming dull hair colors
into shimmery, buttery shades and
turning unmanageable frizzy hair into
shiny and sleek.

 </p>
      </div>
    </div>
  )
}

