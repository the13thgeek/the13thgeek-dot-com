import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt ="" />
        <h1><span>I'm @the13thgeek,</span> frontend developer based in Toronto.</h1>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">
                My resume
            </div>
        </div>
    </div>
  )
}

export default Hero