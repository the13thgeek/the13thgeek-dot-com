import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { NavLink } from "react-router-dom";
import './Hero.scss';
import imgProfilePhoto from '../../assets/home/hero-profile-photo.jpg';

const Hero = () => {
  return (
    <section className="hero" id="hero">
        <div className="content-container">
            <div className="intro">
                <div className="descriptor home-1-intro">
                    <span className="title">Intro</span>
                </div>
                <h1>Hello,<br />I'm <span className="prog-tag">&#123;</span><span className="highlight">Aldreich</span><span className="prog-tag">&#125;</span>.</h1>
                <p>I'm a digital experience designer,<br />
                also known as <span className="highlight">@the13thgeek</span>!</p>
                <div className="call-to-action">
                    <NavLink to="/about" className="cta-link">About Me <i className="fa-solid fa-chevron-right"></i></NavLink>
                    <AnchorLink offset={50} className="cta-link" href='#contact'>Connect <i className="fa-solid fa-chevron-right"></i></AnchorLink>
                </div>
            </div>
            
        </div>
        <div className="pic-chevron">
            <img src={imgProfilePhoto} alt="" />
        </div>
    </section>
  )
}

export default Hero