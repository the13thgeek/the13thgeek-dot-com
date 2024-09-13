import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './FourOhFour.scss';
import imgAvatar from '../assets/global/geek-avatar-404.png';
import seoCard from '../assets/global/seo-card-404.jpg';

const FourOhFour = () => {

  useEffect(() => {
    document.title = "Page Not Found | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
          <title>404 Page Not Found | {import.meta.env.VITE_GLOBAL_SITE_TITLE}</title>
          <meta name="description" content="Oops! The page you're looking for can't be found. Check out other content on @the13thgeek." />
          <meta name="robots" content="noindex, follow" />

          <meta property="og:title" content={`404 Page Not Found | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
          <meta property="og:description" content="Oops! The page you're looking for can't be found. Check out other content on @the13thgeek." />
          <meta property="og:image" content={seoCard} />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`404 Page Not Found | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
          <meta name="twitter:description" content="Oops! The page you're looking for can't be found. Check out other content on @the13thgeek." />
          <meta name="twitter:image" content={seoCard} />
          <meta name="twitter:site" content="@the13thgeek" />
      </Helmet>
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
    </>
  )
}

export default FourOhFour