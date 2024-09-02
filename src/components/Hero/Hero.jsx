import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { NavLink } from "react-router-dom";
import heroVideo from '../../assets/home/video-wall.webm';
import './Hero.scss';

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div className="hero-video-wall">
        <video autoPlay muted loop>
            <source src={heroVideo} type='video/webm' />
        </video>        
        <div className="video-filter"></div>
      </div>
      <div className="g-content-container">
        <div className="intro">
          <div className="g-descriptor home-1-intro">
            <span className="title">Intro</span>
          </div>
          <h1>Hello,<br />I'm <span>Aldreich</span>.</h1>
          <h2>I'm more commonly known in these parts as <span className="gid">@the13thgeek</span>.</h2>
          <div className="actions">
            <NavLink to="/about" className="g-action">About Me <i className="fa-solid fa-chevron-right"></i></NavLink>
            <AnchorLink offset={50} className="g-action" href='#contact'>Connect with me <i className="fa-solid fa-chevron-right"></i></AnchorLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero