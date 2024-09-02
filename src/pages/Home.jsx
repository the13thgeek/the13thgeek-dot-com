import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
// import About from '../components/About/About';
import Skillset from '../components/Skillset/Skillset';
import Socials from '../components/Socials/Socials';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {

  useEffect(() => {
    document.title = import.meta.env.VITE_GLOBAL_SITE_TITLE;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Skillset />
        <Projects />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home