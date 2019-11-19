import React from 'react'
import Slider from 'infinite-react-carousel';
import artist1 from '../w1.png';
import artist2 from '../w2.png';
import artist3 from '../w3.png';

export default function Artists() {
  const settings = {
    slidesPerRow: 3
  };
  return (
    <div className='artists'>
      <Slider {...settings}>
        <div>
          <img className="artist-image" src={artist1} alt="none"></img>
        </div>
        <div>
          <img className="artist-image" src={artist2} alt="none"></img>
        </div>
        <div>
          <img className="artist-image" src={artist3} alt="none"></img>
        </div>
        <div>
          <img className="artist-image" src="https://www.hji.co.uk/wp-content/efs/2018/10/legal-advice-freelance-hairdresser-shutterstock_516922987.jpg" alt="none"></img>
        </div>
        <div>
          <img className="artist-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6QG-djQs0B2c0dEbwXKdtYmsSpzFQsX38YYRcrvZmmR9MJoR&s" alt="none"></img>
        </div>
        <div>
          <img className="artist-image" src="https://hairdressingtraining-homestudy.com/images/articles-GDM/large_500px/hairdresser_posture_131278703_j2.jpg" alt="none"></img>
        </div>
      </Slider>
    </div >
  )
}
