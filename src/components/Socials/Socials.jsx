import React from 'react'
import { Link } from "react-router-dom";
import './Socials.scss';
import vdoTwitch from '../../assets/home/vwall-twitch.webm';

const Socials = () => {
  return (
    <section className="socials" id="socials">
        <div className="instagram">
            <div className="content">
                <div className="g-descriptor home-4-photos">
                    <span className="title">Photos</span>
                </div>
                <h2>Instagram</h2>
                <p className='generic'>
                    I post a lot of things on Instagram. It's usually photos from a recent trip or a convention, some photography practice shots and some cool stuff that I have bought.
                </p>
                <div className="actions">
                    <Link className="g-action" target="_blank" to="//instagram.com/the13thgeek"><i className="fa-brands fa-instagram"></i> Instagram Profile<i className="fa-solid fa-chevron-right"></i></Link>
                </div>
            </div>
        </div>
        <div className="twitch">
            <div className="twitch-video-wall">
                <video autoPlay muted loop>
                    <source src={vdoTwitch} type='video/webm' />
                </video>        
            </div>
            <div className="content">
                <div className="g-descriptor home-5-gaming">
                    <span className="title">Gaming</span>
                </div>
                <h2>Twitch</h2>
                <p className="generic">
                    Do you like co-op, horror, building and rhythm games and enjoy watching someone be so bad at them? Come by my channel and hang out!
                </p>
                <div className="actions">
                    <Link className="g-action" to="/twitch"><i className="fa-brands fa-twitch"></i> the13thgeek on Twitch<i className="fa-solid fa-chevron-right"></i></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Socials