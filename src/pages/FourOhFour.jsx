import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './FourOhFour.scss';
import imgAvatar from '../assets/global/geek-avatar-404.png';

const FourOhFour = () => {

  useEffect(() => {
    document.title = "Page Not Found | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header className='main'>
        <Navbar isHome={false} />
        <div className="page-title-bar error-404">
          <div className="content-container">
              <div className="title-area">
                <div className="descriptor error-404">
                    <span className="title">Error 404</span>
                </div>
                <h1>Page not Found</h1>    
              </div>
              <div className="avatar">
                <img src={imgAvatar} alt="Avatar: 404 Not Found" />
              </div>
          </div>
        </div>
      </header>
      <main className='page-404'>
        <div className="content-container">
          <p><b>Whoops, that's on me!</b> Sorry about that!</p>
          <p>Please click your browser's Back button or try using the navigation menu at the top.</p>
          <p>I'll work on this as soon as I can.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FourOhFour