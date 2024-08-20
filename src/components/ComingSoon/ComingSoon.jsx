import React from 'react';
import './ComingSoon.scss';
import videoWall from './video-wall.webm';
import logoGeek from './logo-the13thgeek.png'
import iconInsta from './icon-ig.png';
import iconTwitter from './icon-twitter.png';
import iconTwitch from './icon-twitch.png';

const ComingSoon = () => {
  return (
    <div id="coming-soon">
        <div id="video-wall">
            <video autoPlay muted loop>
                <source src={videoWall} type='video/webm' />
            </video>        
        </div>
        <div id="filter"></div>
        <div className="content-box message">
            Site Relaunching Soon
        </div>
        <div className="content-box">
            <figure className="main-logo">
                <img src={logoGeek} alt="the13thgeek logo" />
            </figure>
        </div>
        <div className="content-box socials">
            <a href="//twitter.com/the13thgeek" target='_blank' className='social-link'>
                <img src={iconTwitter} alt="Twitter" />
            </a>
            <a href="//twitch.tv/the13thgeek" target='_blank' className='social-link'>
                <img src={iconTwitch} alt="Twitch" />
            </a>
            <a href="//instagram.com/the13thgeek" target='_blank' className='social-link'>
                <img src={iconInsta} alt="Instagram" />
            </a>
        </div>
    </div>
  )
}

export default ComingSoon