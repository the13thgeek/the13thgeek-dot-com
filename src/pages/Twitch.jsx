import React, { useEffect, useRef, useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { dateFormatter, thumbnailResize } from '../utils/utils';
import { fetchClips, fetchLiveData, fetchVODs } from '../utils/twitchUtils';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import seoCard from '../assets/global/seo-card-twitch.jpg';
import './Twitch.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

/* Local assets */
import twitchFootage from '../assets/twitch/twitch-footage.webm';

import imgFeatureEvilWithin from '../assets/twitch/feature/slide-evil-within.jpg';
import imgFeatureEvilWithinLogo from '../assets/twitch/feature/logo-evil-within.png';
import imgFeatureHelldivers2 from '../assets/twitch/feature/slide-helldivers2.jpg';
import imgFeatureHelldivers2Logo from '../assets/twitch/feature/logo-helldivers2.png';
import imgFeatureParkitect from '../assets/twitch/feature/slide-parkitect.jpg';
import imgFeatureParkitectLogo from '../assets/twitch/feature/logo-parkitect.png';
import imgFeatureDKC from '../assets/twitch/feature/slide-dkctf.jpg';
import imgFeatureDKCLogo from '../assets/twitch/feature/logo-dkctf.png';

import imgStaffThe13thgeek from '../assets/twitch/staff-the13thgeek.jpg';
import imgStaffTooniearcade from '../assets/twitch/staff-tooniearcade.jpg'
import imgStaffHreowan from '../assets/twitch/staff-hreowan.jpg'
import imgStaffBriofthegrid from '../assets/twitch/staff-briofthegrid.jpg'

const Twitch = () => {

  const [lastStreams, setLastStreams] = useState([]);
  const [lastClips, setLastClips] = useState([]);
  const [liveData, setLiveData] = useState();
  const [loading, setLoading] = useState(true);

  const isItemNew = (dateInput, age) => {
    let itemDate = new Date(dateInput);
    let todayDate = new Date();
    let dateDiff = todayDate - itemDate;
    let itemAge = dateDiff / (1000 * 60 * 60 * 24);
    if(itemAge <= age) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const pageInit = async () => {
      try {
        const [liveData,lastStreams,lastClips] = await Promise.all([
          fetchLiveData(),
          fetchVODs(),
          fetchClips()
        ]);
        setLiveData(liveData);
        setLastStreams(lastStreams);
        setLastClips(lastClips);
        setLoading(false);

      } catch (e) {
        console.error('Error loading data: ',e);
        setLoading(false);
      }
    };

    pageInit();
  },[]);

    const pageFeatures = [
    {
      'background': imgFeatureDKC,
      'logo': imgFeatureDKCLogo,
      'gametitle': 'Donkey Kong Country: Tropical Freeze',
      'title': "Going Bananas!",
      'schedule': 'Tuesdays @7pm EST',
      'description': '@the13thgeek\'s never played a DK game before. How will he fare platforming across a relentless jungle with a dozen projectiles flying around? Will he need Funky Kong\'s assistance at some point?',
      'scheme': 'dark'
    },
    {
      'background': imgFeatureEvilWithin,
      'logo': imgFeatureEvilWithinLogo,
      'gametitle': 'The Evil Within',
      'title': "Terrors of the Unknown",
      'schedule': 'Thursdays @ 7pm EST',
      'description': 'On this stream, expect a lot of nervous laughter and jump scares as @the13thgeek navigates through twisted environments and face off against terrifying creatures.',
      'scheme': 'dark'
    },
    {
      'background': imgFeatureHelldivers2,
      'logo': imgFeatureHelldivers2Logo,
      'gametitle': 'Helldivers II',
      'title': "Say Hello to Democracy!",
      'schedule': null,
      'description': 'Watch as @the13thgeek and his friends explore new locations in the galaxy and fight for some (Managed) Democracy!',
      'scheme': 'dark'
    },
    {
      'background': imgFeatureParkitect,
      'logo': imgFeatureParkitectLogo,
      'gametitle': 'Parkitect',
      'title': "Let's Build a Theme Park!",
      'schedule': 'Tuesdays @ 7pm EST',
      'description': 'Come chill and help @the13thgeek build a virtual theme park and try to keep it functional in this charming simulation game.',
      'scheme': 'dark'
    }
  ]

return (
    <>
    <Helmet>
        <title>Twitch | {import.meta.env.VITE_GLOBAL_SITE_TITLE}</title>
        <meta name="description" content="Join Aldreich, aka @the13thgeek, on Twitch for live streams of horror games, Dance Dance Revolution, Cities: Skylines, and more. Check out his streaming schedule and tune in!" />
        <meta name='keywords' content='Twitch streamer, the13thgeek Twitch, gaming live streams, horror games, Dance Dance Revolution, Kamen Rider stream, Cities: Skylines streams, streaming schedule' />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://the13thgeek.com/#/twitch" />

        <meta property="og:title" content={`Twitch | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
        <meta property="og:description" content="Join Aldreich, aka @the13thgeek, on Twitch for live streams of horror games, Dance Dance Revolution, Cities: Skylines, and more. Check out his streaming schedule and tune in!" />
        <meta property="og:image" content={seoCard} />
        <meta property="og:url" content="https://the13thgeek.com/#/twitch" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Twitch | ` + import.meta.env.VITE_GLOBAL_SITE_TITLE} />
        <meta name="twitter:description" content="Join Aldreich, aka @the13thgeek, on Twitch for live streams of horror games, Dance Dance Revolution, Cities: Skylines, and more. Check out his streaming schedule and tune in!" />
        <meta name="twitter:image" content={seoCard} />
        <meta name="twitter:site" content="@the13thgeek" />
    </Helmet>
    <header className="main">
        <Navbar />
    </header>
    <main className="page-twitch">
        { liveData ? (
          <section id="live-stream" className="live-stream">
              <div className="back-screen" style={{backgroundImage: `url(${thumbnailResize(liveData.thumbnail_url, 1280, 720)})`}}>
                  <div className="filter"></div>
              </div>
              <div className="content-container">
                  <div className='page-title-box'>
                      <div className="descriptor twitch-1-livestream">
                          <span className="title">Live Stream</span>
                      </div>
                      <div className="live-indicator">
                        <span><i className="fa-solid fa-video"></i>&nbsp;&nbsp;Now On Air</span>
                      </div>
                      <h1 className='live-title'>{ liveData.title.includes('|') ? liveData.title.substring(0, liveData.title.indexOf('|')).trim() : liveData.title }</h1>
                      <p className="schedule">Stream started {dateFormatter('simple-time',liveData.started_at) + ' ' + dateFormatter('simple-time',liveData.started_at)}</p>
                      <p className="caption">@the13thgeek is now live on Twitch!<br />Currently playing: <b>{liveData.game_name}</b></p>
                  </div>
                  <div className="call-to-action">
                      <Link className="cta-link" target='_blank' to="https://twitch.tv/the13thgeek"><i className="fa-brands fa-twitch"></i> Watch Live!<i className="fa-solid fa-chevron-right"></i></Link>
                  </div>
              </div>
          </section>
        ) : (
          <section id="now-playing" className="now-playing">
            <Swiper autoplay={{ delay: 6000, disableOnInteraction: false }} loop={true} effect={'fade'} navigation={true} modules={[Navigation, Autoplay, EffectFade]} className="carousel-now-playing">
                {pageFeatures.map((slide,index) => 
                <SwiperSlide key={index}>
                  <div className="back-screen" style={{backgroundImage: `url(${slide.background})`}}>
                      <div className="filter"></div>
                  </div>
                  <div className="content-container">
                      <div className={`page-title-box ` + slide.scheme}>
                          <div className="descriptor twitch-1-nowplaying">
                              <span className="title">Now Playing</span>
                          </div>
                          <img src={slide.logo} alt={slide.gametitle} className="event-logo" />
                          <h1>{slide.title}</h1>
                          <p className="schedule">{slide.schedule ? ('Streams ' + slide.schedule) : 'Streaming in Regular Rotation' }</p>
                          <p className='caption'>{slide.description}</p>
                      </div>
                      <div className="call-to-action">
                          &nbsp;
                      </div>
                  </div>
                </SwiperSlide>
                )}
            </Swiper>
          </section>
        ) }
        
        <section id="rotation" className="rotation">
            <div className="content-container">
                <div className="descriptor twitch-2-rotation">
                    <span className="title">Rotation</span>
                </div>
                <h2>Latest Broadcasts</h2>
                <div className="navigator">
                  <div className="lb-prev"><i className="fa-solid fa-chevron-left"></i></div>
                  <div className="lb-next"><i className="fa-solid fa-chevron-right"></i></div>
                </div>
                { loading ? (<p>Loading...</p>) : (
                <div className="clips-area">
                    <Swiper slidesPerView={2} spaceBetween={10} navigation={{ prevEl: '.lb-prev', nextEl: '.lb-next' }} modules={[Navigation]} breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 10 }, 992: { slidesPerView: 3, spaceBetween: 20 }, 1200: { slidesPerView: 4, spaceBetween: 30 }}} className="carousel-latest-broadcasts">
                      {lastStreams.map((stream, index) => 
                      <SwiperSlide key={index}>
                        <Link to={ (liveData && index === 0) ? `https://twitch.tv/the13thgeek` : stream.url} target='_blank' key={index} className={`clip-item slide-`+index}>
                          <div className="preview">
                            { (liveData && index === 0) ? (
                              <>
                                <div className="live">Live!</div>
                                <img src={thumbnailResize(liveData.thumbnail_url, 640, 360)} alt="Stream Preview" />
                              </>
                            ) : (
                              <>
                                {isItemNew(stream.created_at, 4) ? (<div className="new">New!</div>) : ('')}
                                <img src={thumbnailResize(stream.thumbnail_url,640,360)} alt="Stream Preview" />
                              </>
                            )}
                          </div>
                          <h4>{stream.title.substring(0, stream.title.indexOf('|')).trim()}</h4>
                          <p className="schedule">
                            {dateFormatter('simple-date',stream.created_at)}<br />
                            {dateFormatter('simple-time',stream.created_at)}
                          </p>
                          <p className="view-count"><span>{stream.view_count} views</span> <i className="fa-solid fa-tv"></i></p>
                        </Link>
                      </SwiperSlide>
                      )}
                    </Swiper>
                </div>
                ) }
                <h2>Popular Clips</h2>
                <div className="navigator">
                    <div className="pc-prev"><i className="fa-solid fa-chevron-left"></i></div>
                    <div className="pc-next"><i className="fa-solid fa-chevron-right"></i></div>
                </div>
                { loading ? (<p>Loading...</p>) : (
                <div className="clips-area">
                    <Swiper slidesPerView={2} spaceBetween={10} navigation={{ prevEl: '.pc-prev', nextEl: '.pc-next' }} modules={[Navigation]} breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 10 }, 992: { slidesPerView: 3, spaceBetween: 20 }, 1200: { slidesPerView: 4, spaceBetween: 30 }}} className="carousel-popular-clips">
                      {lastClips.slice(0,10).map((clip, index) => 
                      <SwiperSlide key={index}>
                          <Link to={clip.url} target='_blank' className='clip-item'>
                            <div className="preview">
                              <div className="clipper">
                                <i className="fa-solid fa-user"></i> Clipped by <b>{clip.creator_name}</b>
                              </div>
                              <img src={clip.thumbnail_url} alt="Clip Preview" />
                            </div>
                            <h4>{clip.title}</h4>
                            <p className="schedule">
                              {dateFormatter('simple-date',clip.created_at)}<br />
                              {dateFormatter('simple-time',clip.created_at)}
                            </p>
                            <p className="view-count"><span>{clip.view_count} views</span> <i className="fa-solid fa-tv"></i></p>
                          </Link>
                      </SwiperSlide>
                      )}
                    </Swiper>
                </div> 
                )}               
            </div>
        </section>
        <section id='twitch-history' className="twitch-history">
            <div className="col-1">
              <div className="video-wall twitch-footage">
                <div className="video-filter"></div>
                <video autoPlay muted loop>
                  <source src={twitchFootage} type='video/mp4' />
                  Your browser does not support video playback.
                </video>
              </div>
            </div>            
            <div className='col-2'>
              <div className="contents">
                  <div className="descriptor twitch-3-history">
                      <span className="title">History</span>
                  </div>
                <h2>Going live in 3, 2, 1...</h2>
                <p>Yes, he's on Twitch! It started out as a way for him to try and get over his stage fright and so that his siblings who live far away can watch him play scary games (because they're too scared to play themselves), and it eventually evolved into a fun hobby.</p>
                <p>@the13thgeek's a known scaredy-cat, so that makes for good content!</p>
                <p>Thanks to this platform, he's made new friends and reconnected with old ones! It helped him discover new games and managed to challenge himself and finish a lot of games he didn't knew he could beat.</p>
                <p>Twitch has also provided him a platform to share some of his cool hobbies like crafting and model kit-building!</p>
              </div>
            </div>
        </section>
        <section id="community" className="community">
          <div className="content-container">
            <div className="information">
                <div className="descriptor twitch-4-community">
                    <span className="title">Community</span>
                </div>
                <h2>#TheMainframe</h2>
                <p>Like what you see so far?<br />
                Do you play the same games and would be down to collab?<br />
                Got another game or activity to recommend?</p>
                <p>If you'd like to be part of the action, you can join in the fun on @the13thgeek's Discord channel! It's the perfect place to hang out, chat, meet fellow geeks and stay updated with the latest news, stream schedules and other shenanigans.</p>
                <p>You can follow on Twitch as well so you never miss out!</p>
                <div className="call-to-action">
                  <Link className="cta-link" target="_blank" rel='nofollow noopener' to="//discord.gg/GdsHhkJD9v"><i className="fa-brands fa-discord"></i> Join the Channel <i className="fa-solid fa-chevron-right"></i></Link>
                  <Link className="cta-link" target="_blank" to="https://twitter.com/the13thgeek"><i className="fa-brands fa-x-twitter"></i> @the13thgeek <i className="fa-solid fa-chevron-right"></i></Link>
                </div>              
            </div>          
            <div className="staff">
              <div className="staff-grid">
                <div className="item">
                  <div className="polaroid the13thgeek">
                    <img src={imgStaffThe13thgeek} alt="Mug shot: @the13thgeek" />
                    <h4><i className="fa-solid fa-video"></i> @the13thgeek</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="polaroid">
                    <img src={imgStaffTooniearcade} alt="Mug shot: @Tooniearcade" />
                    <h4><i className="fa-solid fa-shield-halved"></i> @Tooniearcade</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="polaroid">
                    <img src={imgStaffBriofthegrid} alt="Mug shot: @BriOfTheGrid" />
                    <h4><i className="fa-solid fa-shield-halved"></i> @BriOfTheGrid</h4>
                  </div>
                </div>
                <div className="item">
                  <div className="polaroid">
                    <img src={imgStaffHreowan} alt="Mug shot: @hreowan" />
                    <h4><i className="fa-solid fa-shield-halved"></i> @hreowan</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
    <Footer />
    </>
  )
}

export default Twitch