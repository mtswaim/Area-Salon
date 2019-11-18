import React from 'react';
import gitHub from '../github_fpykxh.png';
import linkedIn from '../linkedin_vnvo6s.png';
export default function Footer(props) {

  return (
    <footer>
      <h1>Join Our List</h1>
      <p>Subscribe to our mailing list to receive updates and promotional offers.</p>
      <p>Home Testimonials</p>
      {/* <i class="fab fa-instagram"></i> */}
      <a href="https://github.com/bgrzybowski29/Invest">
        <img className='image-footer' src={gitHub} border="0" alt="" />
      </a>
      <a href="http://www.linkedin.com/in/ben-grzybowski-27739b1b">
        <img className='image-footer' src={linkedIn} border="0" alt="" />
      </a>
      <p id='copyright'>Dino/Otter 2019</p>
    </footer>
  )
}

