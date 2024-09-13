import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import HomeAbout from '../components/HomeAbout/HomeAbout';
import Projects from '../components/Projects/Projects';
import Workshop from '../components/Workshop/Workshop';
import Gaming from '../components/Gaming/Gaming';
import Connect from '../components/Connect/Connect';
import Footer from '../components/Footer/Footer';
import seoCard from '../assets/global/seo-card-main.jpg';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
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
    <>
      <Helmet>
        <title>{import.meta.env.VITE_GLOBAL_SITE_TITLE}</title>
        <meta name="description" content="Welcome to the13thgeek.com! I'm a Toronto-based designer, developer, traveller and gamer!" />
        <meta name='keywords' content='Web development, React developer, tech blog, geek culture, Kamen Rider fan, Power Rangers fan, gaming, Twitch streamer, Toronto developer, developer portfolio, the13thgeek' />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://the13thgeek.com/" />

        <meta property="og:title" content={import.meta.env.VITE_GLOBAL_SITE_TITLE} />
        <meta property="og:description" content="Welcome to the13thgeek.com! I'm a Toronto-based designer, developer, traveller and gamer!" />
        <meta property="og:image" content={seoCard} />
        <meta property="og:url" content="https://the13thgeek.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={import.meta.env.VITE_GLOBAL_SITE_TITLE} />
        <meta name="twitter:description" content="Welcome to the13thgeek.com! I'm a Toronto-based designer, developer, traveller and gamer!" />
        <meta name="twitter:image" content={seoCard} />
        <meta name="twitter:site" content="@the13thgeek" />
      </Helmet>
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
    </>
  )
}

export default Home