import React, { useEffect, useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Twitch.scss';

const Twitch = () => {

  const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  
  const handleReady = (e) => {
    embed.current = e;
  };

  useEffect(() => {
    document.title = "Twitch | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <section id="twitch" className="twitch">
          <div className="filter"></div>
          <div className="g-content-container intro">
              <div>
                <div className="descriptor">01 <span className="title">Live Stream</span></div>
                <h1>Live on Twitch</h1>
              </div>
              <TwitchEmbed channel='the13thgeek' autoplay={true} muted withChat darkMode={true} width={'100%'} height={`50vh`} />
            </div>
            <div className="g-content-container overview">
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Twitch