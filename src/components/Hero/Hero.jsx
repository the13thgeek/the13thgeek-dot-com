import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { NavLink } from "react-router-dom";
import './Hero.scss';

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div className="g-content-container">
        <div className="intro">
          <div className="descriptor">01 <span className="title">Intro</span></div>
          <h1>Hello,<br />I'm <span>Aldreich</span>.</h1>
          <h2>I'm more commonly known in these parts as <span className="gid">@the13thgeek</span>.</h2>
          <div className="actions">
            <NavLink to="/about" className="g-action">About Me <i class="fa-solid fa-chevron-right"></i></NavLink>
            <AnchorLink offset={50} className="g-action" href='#contact'>Connect with me <i class="fa-solid fa-chevron-right"></i></AnchorLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero