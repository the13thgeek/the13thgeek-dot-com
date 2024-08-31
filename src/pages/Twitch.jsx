import React, { useEffect, useRef, useState } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Twitch.scss';
import twitchAvatar from '../assets/twitch/avatar-geek.png';
import twitchFootage from '../assets/twitch/twitch-footage.webm';

const Twitch = () => {

  const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  const [nowStreaming, setNowStreaming] = useState("evil-within");
  
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
        </section>
        
        <section className="twitch-history">
          <div className="col-1">
            <div className="g-video-wall twitch-footage">
              <div className="video-filter"></div>
              <video autoPlay muted loop>
                <source src={twitchFootage} type='video/mp4' />
                Your browser does not support video playback.
              </video>
            </div>
          {/* <div className='avatar'><img src={twitchAvatar} alt="Twitch avatar character" /></div> */}
          </div>            
          <div className='col-2'>
            <div className="contents">
              <div className="descriptor">02 <span className="title">History</span></div>
              <h2>Yes, I'm on Twitch.</h2>
              <p>It started out as a way for me to try and get over my stage fright and so that my siblings who live far away can watch me play scary games (because they're too scared to play themselves), and it eventually evolved into a fun hobby.</p>
              <p>I'm a big scaredy-cat, so that makes for good content!</p>
              <p>Thanks to this platform, I have met new friends and reconnected with old ones! I also discovered new games.I've managed to challenge myself and finish a lot of games I didn't know I could beat and I get to share some cool hobbies like crafting and model kit-building!</p>
            </div>
          </div>
        </section>

        <section className="twitch-now-streaming">
          <div className="g-content-container">
            <div className="descriptor">03 <span className="title">Now Streaming</span></div>
            <h2>Yes, I'm on Twitch.</h2>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  )
}

export default Twitch