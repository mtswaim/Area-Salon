import React from 'react';
import gitHub from '../github_fpykxh.png';
import linkedIn from '../linkedin_vnvo6s.png';
export default function Footer(props) {

  return (
    <footer>
      <p id="join">Join Our List</p>
      <p id="subscribe">Subscribe to our mailing list to receive updates and promotional offers.</p>
      <button className="footer-buttons">Email Address</button>
      <button className="footer-buttons">Subscribe</button>
      <div id="footer-group">
        <p>Home Testimonials</p>
        <i className="im im-instagram"></i>
        <i class="im im-youtube"></i>
        <i class="im im-facebook"></i>
        <i class="im im-twitter"></i>
        <i class="im im-linkedin"></i>
      </div>
    </footer>
  )
}

