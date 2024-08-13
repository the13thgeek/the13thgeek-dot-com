import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Twitch = () => {

  useEffect(() => {
    document.title = "Twitch | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
  });

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <p>Twitch</p>
      </main>
      <Footer />
    </div>
  )
}

export default Twitch