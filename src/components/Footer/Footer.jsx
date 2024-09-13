import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/global/header-logo-default.png';
import './Footer.scss';

const Footer = () => {
    let currentYear = new Date().getFullYear();

  return (
    <footer className="global">
        <div className="content-container">
            <img className='footer-logo' src={logo} alt="Logo" />
            <p>Copyright© 2011 &mdash; {(new Date().getFullYear())}<br />
            <b>Aldreich Aguilar // @the13thgeek</b></p>
            <p><i>v{import.meta.env.VITE_SITE_VERSION}</i></p>
        </div>
    </footer>

  )
}

export default Footer