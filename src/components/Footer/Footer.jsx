import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
    let currentYear = new Date().getFullYear();

  return (
    <footer className="global">
        <div className="content-container">
            <p>Copyright© 2011 &mdash; {(new Date().getFullYear())}</p>
            <p><b>Aldreich Aguilar // @the13thgeek</b></p>
        </div>
    </footer>

  )
}

export default Footer