import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link, NavLink } from "react-router-dom";
import './Hero.scss';
import imgProfilePhoto from '../../assets/home/hero-profile-photo.jpg';

const Hero = () => {
  return (
    <section className="hero" id="hero">
        <div className="decor">
            <div className="code-wrapper">
                <div className="pseudocode">&#x3C;header class=&#x22;global&#x22;&#x3E;&#x3C;nav&#x3E;&#x3C;ul class=&#x22;menu-toplevel&#x22;&#x3E;&#x3C;li&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/li&#x3E;&#x3C;/ul&#x3E;&#x3C;/header&#x3E;</div>
            </div>
            <div className="code-wrapper">
                <div className="pseudocode reverse">&#x66;&#x6F;&#x72;&#x28;&#x24;&#x69;&#x3D;&#x30;&#x3B;&#x24;&#x69;&#x3C;&#x63;&#x6F;&#x75;&#x6E;&#x74;&#x28;&#x24;&#x7A;&#x6C;&#x69;&#x73;&#x74;&#x29;&#x3B;&#x24;&#x69;&#x2B;&#x2B;&#x29;&#x7B;&#x20;&#x65;&#x63;&#x68;&#x6F;&#x20;&#x22;&#x70;&#x61;&#x72;&#x61;&#x6D;&#x65;&#x74;&#x65;&#x72;&#x20;&#x22;&#x2E;&#x28;&#x24;&#x69;&#x2B;&#x31;&#x29;&#x2E;&#x20;&#x24;&#x7A;&#x6C;&#x69;&#x73;&#x74;&#x5B;&#x24;&#x69;&#x5D;&#x3B;&#x20;&#x7D;</div>
            </div>
            <div className="code-wrapper">
                <div className="pseudocode">SELECT a.id, b.* FROM `unit` a, `record` b WHERE a.id = b.record_id ORDER BY b.update DESC</div>
            </div>
        </div>
        <div className="content-container">
            <div className="intro">
                <div className="descriptor home-1-intro">
                    <span className="title">Intro</span>
                </div>
                <h1>Hello,<br />I'm <span className="prog-tag">&#123;</span><span className="highlight">Aldreich</span><span className="prog-tag">&#125;</span>.</h1>
                <p>I'm a web experience creator,<br />
                also known as <span className="highlight">@the13thgeek</span>!</p>
                <div className="call-to-action">
                    <Link to="/about" className="cta-link">About Me <i className="fa-solid fa-chevron-right"></i></Link>
                    <AnchorLink offset={50} className="cta-link" href='#connect'>Connect <i className="fa-solid fa-chevron-right"></i></AnchorLink>
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