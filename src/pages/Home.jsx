import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import HomeAbout from '../components/HomeAbout/HomeAbout';
import Projects from '../components/Projects/Projects';
import Workshop from '../components/Workshop/Workshop';
import Gaming from '../components/Gaming/Gaming';
import Connect from '../components/Connect/Connect';
import Footer from '../components/Footer/Footer';

// import Hero from '../components/Hero/Hero';
// import About from '../components/About/About';
// import Skillset from '../components/Skillset/Skillset';
// import Socials from '../components/Socials/Socials';
// import Contact from '../components/Contact/Contact';
// import Footer from '../components/Footer/Footer';


const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = import.meta.env.VITE_GLOBAL_SITE_TITLE;

    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div>
      <header className='main'>
        <Navbar isHome={true} />
      </header>
      <main>
        <Hero />
        <HomeAbout />
        <Workshop />
        <Projects />
        <Gaming />
        <Connect />
      </main>
      <Footer />


      {/* <header>
        <Navbar isHome={true} />
      </header>
      <main>
        <Hero />
        <Skillset />
        
        <Socials />
        <Contact />
      </main>
      <Footer /> */}
    </div>
  )
}

export default Home