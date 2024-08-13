import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';
//import footer_logo from '../../assets/footer_logo.svg';
import footer_logo from '../../assets/global/header-logo-default.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    let currentYear = new Date().getFullYear();

  return (
    <footer className='global'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='footer-logo' src={footer_logo} alt="" />
                <p>Integer eget ipsum ultricies, volutpat sem sed, pharetra nunc. Donec ut odio arcu. Quisque volutpat porttitor aliquet.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" name="" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; {currentYear} {import.meta.env.VITE_GLOBAL_SITE_TITLE}. All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p><Link className='' to="/terms-of-service">Terms of Service</Link></p>
                <p><Link className='' to="/privacy-policy">Privacy Policy</Link></p>
                <p>Connect with me</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer