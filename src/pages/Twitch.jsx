import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { dateFormatter, thumbnailResize } from '../utils/utils';
import { fetchClips, fetchLiveData, fetchVODs } from '../utils/twitchUtils';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import seoCard from '../assets/global/seo-card-twitch.jpg';
import TwitchNowPlaying from '../components/TwitchNowPlaying/TwitchNowPlaying';
import TwitchNowLive from '../components/TwitchNowLive/TwitchNowLive';
import './Twitch.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

/* Local assets */
import twitchFootage from '../assets/twitch/twitch-footage.webm';
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
        <TwitchNowLive liveData={liveData} />
      ) : (
        <TwitchNowPlaying />
      ) }
        
        <section id="rotation" className="rotation">
            <div className="row">
                <div className="col-info">
                    <div className="descriptor twitch-2-rotation">
                        <span className="title">Rotation</span>
                    </div>
                    <h2>Latest Streams</h2>
                    <div className="navigator">
                        <div className="lb-prev"><i className="fa-solid fa-chevron-left"></i></div>
                        <div className="lb-next"><i className="fa-solid fa-chevron-right"></i></div>
                    </div>    
                </div>
                <div className="col-clips">
                    { loading ? (<p>Loading...</p>) : (
                    <div className="clips-area">
                        {/* <Swiper slidesPerView={2} spaceBetween={10} navigation={{ prevEl: '.lb-prev', nextEl: '.lb-next' }} modules={[Navigation]} breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 10 }, 992: { slidesPerView: 3, spaceBetween: 20 }, 1200: { slidesPerView: 4, spaceBetween: 30 }}} className="carousel-latest-broadcasts"> */}
                        <Swiper 
                          slidesPerView={'auto'}
                          spaceBetween={10}
                          navigation={{ prevEl: '.lb-prev', nextEl: '.lb-next' }}
                          modules={[Navigation]}
                          className="carousel-latest-broadcasts"
                        >
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
                              { (liveData && index === 0) ? (
                              <p className='tag'><span className='live'>On Air</span></p>
                              ) : (
                              <p className='tag'><span className='vod'>VOD Replay</span></p>
                              ) }
                              
                              
                              <p className="schedule">
                                {dateFormatter('simple-date',stream.created_at)} / {dateFormatter('simple-time',stream.created_at)}
                              </p>
                              <p className="view-count"><span>{stream.view_count} views</span> <i className="fa-solid fa-tv"></i></p>
                            </Link>
                          </SwiperSlide>
                          )}
                        </Swiper>
                      </div>
                      ) }
                    <div className="shader"></div>
                </div>
            </div>
            <div className="row">
              <div className="col-info">
                    <h2>Popular Clips</h2>
                    <div className="navigator">
                        <div className="pc-prev"><i className="fa-solid fa-chevron-left"></i></div>
                        <div className="pc-next"><i className="fa-solid fa-chevron-right"></i></div>
                    </div>
                </div>
                <div className="col-clips">
                  { loading ? (<p>Loading...</p>) : (
                  <div className="clips-area">
                      <Swiper 
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        navigation={{ prevEl: '.pc-prev', nextEl: '.pc-next' }}
                        modules={[Navigation]}
                        className="carousel-popular-clips
                      ">
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
                              <p className='tag'><span className='clip'>Clip</span></p>
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
                  <div className="shader"></div>
                </div>
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
        {/* <section id="mainframe">
          MAINFRAME
        </section> */}
        <section id="community" className="community">
          <div className="content-container">
            <div className="information">
                <div className="descriptor twitch-4-community">
                    <span className="title">Community</span>
                </div>
                <h2>Join us on Discord!</h2>
                <p>Like what you see so far?<br />
                Do you play the same games and would be down to collab?<br />
                Got another game or activity to recommend?</p>
                <p>If you'd like to be part of the action, you can join in the fun on @the13thgeek's Discord channel! It's the perfect place to hang out, chat, meet fellow geeks and stay updated with the latest news, stream schedules and other shenanigans.</p>
                <p>You can follow on Twitch as well so you never miss out!</p>
                <div className="call-to-action">
                  <Link className="cta-link" target="_blank" rel='nofollow noopener' to="//discord.gg/GdsHhkJD9v"><i className="fa-brands fa-discord"></i> Join the Server <i className="fa-solid fa-chevron-right"></i></Link>
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