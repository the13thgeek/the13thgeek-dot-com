import React, { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, NavLink } from "react-router-dom";
import './Navbar.scss';
import logo from '../../assets/global/header-logo-default.png';

const Navbar = ({ isHome = false }) => {
  
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.left = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.left = "-350px";
  }

  return (
      <nav className='global'>
        <div className="content-container">
            <Link className='header-link' to='https://www.the13thgeek.com'><img className='header-logo' src={logo} alt="the13thgeek logo" /></Link>
            <div className="nav-mob-open" onClick={openMenu}><i className="fa-solid fa-bars"></i></div>
            <ul ref={menuRef} className="nav-menu">
                <div className="nav-mob-close" onClick={closeMenu}><i className="fa-solid fa-xmark"></i></div>
                <li><NavLink className={({ isActive }) => isActive ? "anchor-link current" : "anchor-link" } to="/">Home</NavLink></li>
                { isHome ? (
                  <li><AnchorLink className='anchor-link' offset={0} href='#workshop'>W.I.P.</AnchorLink></li>
                ) : (
                  <li><NavLink className='anchor-link' to="/#workshop">W.I.P.</NavLink></li>
                ) }
                { isHome ? (
                  <li><AnchorLink className='anchor-link' offset={0} href='#projects'>Projects</AnchorLink></li>
                ) : (
                  <li><NavLink className='anchor-link' to="/#projects">Projects</NavLink></li>
                ) }
                <li><NavLink className={({ isActive }) => isActive ? "anchor-link current" : "anchor-link" } to="/field-notes">Blog</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "anchor-link current" : "anchor-link" } to="/about">About</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "anchor-link current" : "anchor-link" } to="/twitch">Twitch</NavLink></li>
            </ul>
            { isHome ? (
              <div className="nav-connect"><AnchorLink className='anchor-link' offset={0} href='#connect'>Connect</AnchorLink></div>
            ) : (
              <div className="nav-connect"><NavLink className='anchor-link' to='/#connect'>Connect</NavLink></div>
            )}
 
        </div>
      </nav>

  )
}

export default Navbar