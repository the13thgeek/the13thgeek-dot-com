import React from 'react'
import Obfuscate from 'react-obfuscate';
import { Link } from "react-router-dom";
import './Connect.scss';

const Connect = ({ customClassName = 'home-7-connect' }) => {
  return (
    <section id="connect" className="connect">
        <div className="title-area">
            <div className={`descriptor ` + customClassName }>
                <span className="title">Connect</span>
            </div>
        </div>
        <h2>Get in touch</h2>
        <hr />
        <p><Obfuscate email='hello@the13thgeek.com' headers={{subject: 'Let\'s Connect'}} /></p>
        <div className="social-links">
            <Link to='https://github.com/the13thgeek/' target='_blank' rel='nofollow'><i className="fa-brands fa-github"></i></Link>
            <Link to='https://twitch.tv/the13thgeek/' target='_blank' rel='nofollow'><i className="fa-brands fa-twitch"></i></Link>
            <Link to='https://twitter.com/the13thgeek' target='_blank' rel='nofollow'><i className="fa-brands fa-x-twitter"></i></Link>
            <Link to='https://instagram.com/the13thgeek' target='_blank' rel='nofollow'><i className="fa-brands fa-instagram"></i></Link>
            <Link to='https://www.linkedin.com/in/aldreich-aguilar/' target='_blank' rel='nofollow'><i className="fa-brands fa-linkedin-in"></i></Link>

        </div>
    </section>
  )
}

export default Connect