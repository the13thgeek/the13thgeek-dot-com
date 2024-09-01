import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const FourOhFour = () => {

  useEffect(() => {
    document.title = "Page Not Found | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <p>404 Page Not Found</p>
      </main>
      <Footer />
    </div>
  )
}

export default FourOhFour