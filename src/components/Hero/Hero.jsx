import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.scss';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="g-content-container">
        <div className="intro">
          <h1>Hello<br /><span>I'm Aldreich</span>,</h1>
          <h2>or more commonly known in these parts as <span className="gid">@the13thgeek</span>.</h2>
        </div>
        
      </div>
        {/* <img src={profile_img} alt ="" /> */}
        <p>The quick brown fox jumps over the lazy dog.</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            </div>
            <div className="hero-resume">
                My resume
            </div>
        </div>
    </div>
  )
}

export default Hero