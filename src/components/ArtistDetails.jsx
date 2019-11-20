import React, { useState } from 'react';
import artist1 from '../w1.png';
import artist2 from '../w2.png';
import artist3 from '../w3.png';
import Slider from 'infinite-react-carousel';

export default function ArtistDetails(props) {

  const [backGround, setbackGround] = useState('');
  let divStyle = { backgroundImage: `url(${backGround})` };
  const settings = {
    slidesPerRow: 3
  };
  return (
    <div id='artist-box'>
      <div id="artist-box-pics">
        <div id="artist-box-pics-main-pic" style={divStyle} />
        <Slider {...settings}>
          <div>
            <img className="details-img" src={artist1} onClick={() => setbackGround(artist1)} alt="none"></img>
          </div>
          <div>
            <img className="details-img" src={artist2} onClick={() => setbackGround(artist2)} alt="none"></img>
          </div>
          <div>
            <img className="details-img" onClick={() => setbackGround(artist3)} src={artist3} alt="none"></img>
          </div>
          <div>
            <img className="details-img" onClick={() => setbackGround(artist1)} src="https://www.hji.co.uk/wp-content/efs/2018/10/legal-advice-freelance-hairdresser-shutterstock_516922987.jpg" alt="none"></img>
          </div>
          <div>
            <img className="details-img" onClick={() => setbackGround(artist2)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6QG-djQs0B2c0dEbwXKdtYmsSpzFQsX38YYRcrvZmmR9MJoR&s" alt="none"></img>
          </div>
          <div>
            <img className="details-img" onClick={() => setbackGround(artist3)} src="https://hairdressingtraining-homestudy.com/images/articles-GDM/large_500px/hairdresser_posture_131278703_j2.jpg" alt="none"></img>
          </div>
        </Slider>
      </div>
      <div id="artist-box-info">
        <p>img</p>
        <p>name</p>
        <p>desc</p>
        <p>desc2</p>
      </div>
    </div>
  )
}

