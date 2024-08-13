import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
// import About from '../components/About/About';
import Services from '../components/Services/Services';
import MyWork from '../components/MyWork/MyWork';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {

  useEffect(() => {
    document.title = import.meta.env.VITE_GLOBAL_SITE_TITLE;
  });

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
        <MyWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home