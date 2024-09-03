import React, { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavLink } from "react-router-dom";
import './Navbar.scss';
import logo from '../../assets/global/header-logo-default.png';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = ({ isHome = false }) => {
  
  //const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <header className='main'>
      <div className="g-content-container">
        <nav className='global'>
            <img className='header-logo' src={logo} alt="the13thgeek logo" />
            <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                {/* Keep old link just in case */}
                {/* <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home" ? <img src={underline} alt='' />:<></>}</li> */ }
                <li><NavLink className={({ isActive }) => isActive ? "anchor-link current" : "anchor-link" } to="/">Home</NavLink></li>
                { isHome ? (
                  <li><AnchorLink className='anchor-link' offset={0} href='#projects'>Projects</AnchorLink></li>
                ) : (
                  <li><NavLink className='anchor-link' to="/#projects">Projects</NavLink></li>
                ) }
                <li><NavLink className={({ isActive }) => isActive ? "anchor-link current" : "anchor-link" } to="/about">About</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "anchor-link current" : "anchor-link" } to="/twitch">Twitch</NavLink></li>
                {/* <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about" ? <img src={underline} alt='' />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services" ? <img src={underline} alt='' />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p onClick={()=>setMenu("mywork")}>Portfolio</p></AnchorLink>{menu==="mywork" ? <img src={underline} alt='' />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact" ? <img src={underline} alt='' />:<></>}</li> */}
            </ul>
            { isHome ? (
              <div className="nav-connect"><AnchorLink className='anchor-link' offset={0} href='#contact'>Connect</AnchorLink></div>
            ) : (
              <div className="nav-connect"><NavLink className='anchor-link' to='/#contact'>Connect</NavLink></div>
            )}
        </nav>
      </div>
    </header>

  )
}

export default Navbar