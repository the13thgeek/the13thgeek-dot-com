import React from 'react';
import { Link } from "react-router-dom";
import './Gaming.scss';
import imgNowPlaying from '../../assets/twitch/nowplaying-evil-within.jpg';
    
const Gaming = () => {
  return (
    <section id="gaming" className="gaming">
        <div className="screen">
            <div className="display-area" style={{backgroundImage: `url(${imgNowPlaying})`}}>
                <div className="pixel-filter"></div>
            </div>
        </div>
        <div className="info">
            <div className="descriptor home-5-gaming">
                <span className="title">Gaming</span>
            </div>
            <h2>Let's Play!</h2>
            <p>Do you like co-op, horror, building and rhythm games and enjoy watching someone be so bad at them? Come by my channel and hang out!</p>
            <div className="call-to-action">
                <Link className="cta-link" to="/twitch">See more<i className="fa-solid fa-chevron-right"></i></Link>
            </div>
            <hr />
            <div className="now-playing">
                <div className="arrow">
                    <i className="fa-solid fa-angles-left"></i>
                </div>
                <div className="game-info">
                    <div className="category">Community Challenge</div>
                    <h3>The Evil Within</h3>
                    <div className="schedule">streaming Thursdays @ 7pm EST</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gaming