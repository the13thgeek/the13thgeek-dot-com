import React, { useEffect, useRef, useState } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Twitch.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-fade';

/* Local assets */
import twitchAvatar from '../assets/twitch/avatar-geek.png';
import twitchFootage from '../assets/twitch/twitch-footage.webm';

import imgFeatureEvilWithin from '../assets/twitch/feature/slide-evil-within.jpg';
import imgFeatureEvilWithinLogo from '../assets/twitch/feature/logo-evil-within.png';
import imgFeatureHelldivers2 from '../assets/twitch/feature/slide-helldivers2.jpg';
import imgFeatureHelldivers2Logo from '../assets/twitch/feature/logo-helldivers2.png';
import imgFeatureParkitect from '../assets/twitch/feature/slide-parkitect.jpg';
import imgFeatureParkitectLogo from '../assets/twitch/feature/logo-parkitect.png';
import imgFeatureSplat3 from '../assets/twitch/feature/slide-splat3.jpg';
import imgFeatureSplat3Logo from '../assets/twitch/feature/logo-splat3.png';

import imgGameCities2 from '../assets/twitch/rotation/game-cities2.jpg';
import imgGameSplat3 from '../assets/twitch/rotation/game-splat3.jpg';
import imgGameParkitect from '../assets/twitch/rotation/game-parkitect.jpg';
import imgGameDdr3Mk from '../assets/twitch/rotation/game-ddr3mk.jpg';
import imgGameAceCombat7 from '../assets/twitch/rotation/game-acecombat7.jpg';
import imgGameHelldivers2 from '../assets/twitch/rotation/game-helldivers2.jpg'
import imgGameItTakesTwo from '../assets/twitch/rotation/game-ittakestwo.jpg';
import imgGameUntilThen from '../assets/twitch/rotation/game-untilthen.jpg';
import imgGameEvilWithin from '../assets/twitch/rotation/game-evilwithin.jpg';
import imgGameMarioKart8D from '../assets/twitch/rotation/game-mariokart8d.jpg';

const Twitch = () => {

  const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  const [nowStreaming, setNowStreaming] = useState("evil-within");
  
  const handleReady = (e) => {
    embed.current = e;
  };

  const changeGame = (name) => {
    setNowStreaming(name);
  };

  useEffect(() => {
    document.title = "Twitch | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
    window.scrollTo(0, 0);
  }, []);

  const pageFeatures = [
    {
      'background': imgFeatureEvilWithin,
      'logo': imgFeatureEvilWithinLogo,
      'gametitle': 'The Evil Within',
      'title': "Terrors of the Unknown",
      'schedule': 'Thursdays @ 7pm EST',
      'description': 'On this stream, expect a lot of nervous laughter and jump scares as @the13thgeek navigates through twisted environments and face off against terrifying creatures.',
      'caption': null,
      'scheme': 'dark'
    },
    {
      'background': imgFeatureSplat3,
      'logo': imgFeatureSplat3Logo,
      'gametitle': 'Splatoon 3',
      'title': "The Final Splatfest",
      'schedule': 'weekend of Sep 13th-16th',
      'description': 'The dawn of the final Splatoon 3 Splatfest is upon us. @the13thgeek chose to fight for Team Future. Will they prevail against the Past and Present Teams?',
      'caption': null,
      'scheme': 'dark'
    },
    {
      'background': imgFeatureHelldivers2,
      'logo': imgFeatureHelldivers2Logo,
      'gametitle': 'Helldivers II',
      'title': "Say Hello to Democracy!",
      'schedule': null,
      'description': 'Watch as @the13thgeek and his friends explore new locations in the galaxy and fight for some (Managed) Democracy!',
      'caption': null,
      'scheme': 'dark'
    },
    {
      'background': imgFeatureParkitect,
      'logo': imgFeatureParkitectLogo,
      'gametitle': 'Parkitect',
      'title': "Let's Build a Theme Park!",
      'schedule': 'Tuesdays @ 7pm EST',
      'description': 'Come chill and help @the13thgeek build a virtual theme park and try to keep it functional in this charming simulation game.',
      'caption': null,
      'scheme': 'dark'
    }
  ]

  const gameRotation = [
    {
      'isNew': true,
      'title': 'The Evil Within',
      'category': 'Community Challenge',
      'schedule': 'Thursdays @ 7pm EST',
      'image': imgGameEvilWithin
    },
    {
      'isNew': true,
      'title': 'Parkitect',
      'category': 'Geek Builds',
      'schedule': 'Tuesdays @ 7pm EST',
      'image': imgGameParkitect
    },
    {
      'isNew': true,
      'title': 'Until Then: New Game+',
      'category': null,
      'schedule': null,
      'image': imgGameUntilThen
    },
    {
      'isNew': false,
      'title': 'Cities Skylines 2',
      'category': 'Geek Builds',
      'schedule': 'Mondays @ 3pm EST',
      'image': imgGameCities2
    },
    {
      'isNew': false,
      'title': 'Dance Dance Revolution 3rdMIX ver.KOREA2',
      'category': 'GEEK×RETRO',
      'schedule': 'Saturdays @ 10am EST',
      'image': imgGameDdr3Mk
    },
    {
      'isNew': false,
      'title': 'Mario Kart 8 Deluxe',
      'category': 'Danger Zone',
      'schedule': null,
      'image': imgGameMarioKart8D
    },
    {
      'isNew': false,
      'title': 'Splatoon 3',
      'category': 'Poptart',
      'schedule': null,
      'image': imgGameSplat3
    },
    {
      'isNew': false,
      'title': 'Helldivers II',
      'category': 'Collaborations',
      'schedule': null,
      'image': imgGameHelldivers2
    }
    // {
    //   'isNew': false,
    //   'title': 'It Takes Two feat. @lilnerdgamer',
    //   'category': 'Collaborations',
    //   'schedule': null,
    //   'image': imgGameItTakesTwo
    // },
    // {
    //   'isNew': false,
    //   'title': 'Ace Combat 7: Skies Unknown',
    //   'category': 'Danger Zone',
    //   'schedule': null,
    //   'image': imgGameAceCombat7
    // }
  ];

  return (
    <>
    <header className="main">
        <Navbar />
    </header>
    <main className="page-twitch">
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
                        <Link className="cta-link" target='_blank' to="https://twitch.tv/the13thgeek"><i className="fa-brands fa-twitch"></i> {slide.caption ? slide.caption : 'Watch Live' } <i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
                </div>
              </SwiperSlide>
              )}
          </Swiper>
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
                  <div className="descriptor twitch-2-history">
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
        <section id="rotation" className="rotation">
            <div className="content-container">
                <div className="descriptor twitch-3-rotation">
                    <span className="title">Rotation</span>
                </div>
                <h2>Games on Broadcast</h2>
                <div className="games-list">
                    {gameRotation.map((game,index) => 
                      <div key={index} className="game-item">
                          <div className="preview">
                              {game.isNew ? (<div className="new">New!</div>) : ('')}
                              <img src={game.image} alt={game.title} />
                          </div>
                          <h4>{game.title}</h4>
                          <p className="schedule">{game.schedule ? ('streams ' + game.schedule) : 'Regular Rotation'}</p>
                          <p className="category"><span>{game.category ? game.category : 'the13thgeek Live!'}</span> <i className="fa-solid fa-tv"></i></p>
                      </div>
                    )}

                    
                </div>
            </div>
        </section>
    </main>
    <Footer />
    </>
    // <div>
    //   <header className='main'>
    //     <Navbar />
    //   </header>
    //   <main>
    //     <section id="twitch" className="twitch">
    //       <div className="filter"></div>
    //       <div className="g-content-container intro">
    //         <div>
    //           <div className="descriptor">01 <span className="title">Live Stream</span></div>
    //           <h1>Live on Twitch</h1>
    //         </div>
    //         <TwitchEmbed channel='the13thgeek' autoplay={true} muted withChat darkMode={true} width={'100%'} height={`50vh`} />
    //       </div>
    //     </section>
    //     <section className={('twitch-now-streaming ' + nowStreaming)}>
    //       <div className="g-content-container">
    //         <div className="row">
    //           <div className="descriptor">03 <span className="title">Now Streaming</span></div>
    //         </div>
    //         <div className="row game-list">
    //             <div className={(nowStreaming === 'evil-within') ? 'item evil-within active' : 'item evil-within'} onClick={() => setNowStreaming('evil-within')}></div>
    //             <div className={(nowStreaming === 'zelda-minish-cap') ? 'item zelda-minish-cap active' : 'item zelda-minish-cap'} onClick={() => setNowStreaming('zelda-minish-cap')}></div>
    //             <div className={(nowStreaming === 'skylines') ? 'item skylines active' : 'item skylines'} onClick={() => setNowStreaming('skylines')}></div>
    //             <div className={(nowStreaming === 'ddr') ? 'item ddr active' : 'item ddr'} onClick={() => setNowStreaming('ddr')}></div>
    //         </div>
    //         <div className="row game-details">
    //           {(nowStreaming === 'evil-within') ? (
    //             <>
    //             <span className="category" style={{backgroundColor:'#900'}}>
    //               Community Challenge
    //             </span>
    //             <h2 style={{color:'#c00'}}>The Evil Within</h2>
    //             <p className="generic description">
    //               On my stream, The Evil Within becomes a pulse-pounding ride through pure horror. Expect a lot of nervous laughter and jump scares as I navigate through twisted environments and face off against terrifying creatures. If you enjoy watching someone get spooked (and sometimes scream), while trying to outsmart the game's relentless enemies, you're in for a treat! 
    //             </p>
    //             <div className="schedule">
    //               <small>When to watch</small>
    //               <div className="timeslot">Thursdays @ 7pm EST*</div>
    //               <small className="footnote">*Schedule is subject to change. Follow <a href="//twitter.com/the13thgeek" target='_blank'>@the13thgeek</a> on X (formerly Twitter) for the latest updates.</small>
    //             </div>
    //             </>
    //           ) : (<></>)}
    //           {(nowStreaming === 'zelda-minish-cap') ? (
    //             <>
    //             <span className="category" style={{backgroundColor:'#666'}}>
    //               GEEK × RETRO
    //             </span>
    //             <h2 style={{color:'#fff'}}>The Legend of Zelda: The Minish Cap</h2>
    //             <p className="generic description">
    //             On my stream, The Minish Cap is a nostalgic journey through the magical world of Hyrule. You'll join me as I explore, solve puzzles, and take on the role of tiny Link in this charming adventure. Expect a mix of focused gameplay, moments of awe at the game's clever design, and a lot of nerdy enthusiasm as I dive into this classic Zelda title. Perfect for those who love a good story and some laid-back gaming vibes.
    //             </p>
    //             <div className="schedule">
    //               <small>When to watch</small>
    //               <div className="timeslot">Tuesdays @ 7pm EST*</div>
    //               <small className="footnote">*Schedule is subject to change. Follow <a href="//twitter.com/the13thgeek" target='_blank'>@the13thgeek</a> on X (formerly Twitter) for the latest updates.</small>
    //             </div>
    //             </>
    //           ) : (<></>)}
    //           {(nowStreaming === 'skylines') ? (
    //             <>
    //             <span className="category" style={{backgroundColor:'#369'}}>
    //               Regular Rotation
    //             </span>
    //             <h2 style={{color:'#fff'}}>Cities Skylines II</h2>
    //             <p className="generic description">
    //               When I'm playing Cities: Skylines 2, you'll see me geek out over city planning, infrastructure design, and all the tiny details that make a city thrive. I'll be balancing budgets, solving traffic problems, and maybe even creating the perfect city… or watching it hilariously fall apart. Whether you're into serious city-building or just want to hang out and chat while I build, my stream is a chill place to watch creativity and strategy unfold.
    //             </p>
    //             <div className="schedule">
    //               <small>When to watch</small>
    //               <div className="timeslot">Mondays @ 3pm EST*</div>
    //               <small className="footnote">*Schedule is subject to change. Follow <a href="//twitter.com/the13thgeek" target='_blank'>@the13thgeek</a> on X (formerly Twitter) for the latest updates.</small>
    //             </div>
    //             </>
    //           ) : (<></>)}
    //           {(nowStreaming === 'ddr') ? (
    //             <>
    //             <span className="category" style={{backgroundColor:'#ffd700', color:'#000'}}>
    //               GEEK × CARDIO
    //             </span>
    //             <h2 style={{color:'#fff'}}>Dance Dance Cardiolution</h2>
    //             <p className="generic description">
    //             Get ready to move to the beat as I tackle Dance Dance Revolution on stream! I'll be dancing through high-energy tracks with a mix of determination and fun, sometimes nailing the combos and sometimes totally messing up, but always having a blast. If you're into rhythm games or just want to see someone having a great time (with the occasional chipmunk voice filter), this is where the party's at!
    //             </p>
    //             <div className="schedule">
    //               <small>When to watch</small>
    //               <div className="timeslot">Saturdays @ 10pm EST*</div>
    //               <small className="footnote">*Schedule is subject to change. Follow <a href="//twitter.com/the13thgeek" target='_blank'>@the13thgeek</a> on X (formerly Twitter) for the latest updates.</small>
    //             </div>
    //             </>
    //           ) : (<></>)}
    //         </div>            
    //       </div>
    //     </section>

    //     <section className="twitch-community">
    //       <div className="g-content-container">
    //         <div>
    //           <div className="descriptor">04 <span className="title">Community</span></div>
    //           <h2>Join the chaos!</h2>
    //           <p className="generic">Like what you see so far? If you want to be part of the action, you can in the fun on my channel's Discord channel!</p>
    //           <p className="generic">It's the perfect place to hang out, chat, meet fellow geeks and stay updated with the latest news, stream schedules and other shenanigans.</p>
    //           <p className="generic">You can follow me on Twitch as well so you never miss out!</p>
    //           <div className="actions">
    //             <Link className="g-action" target="_blank" rel='nofollow noopener' to="//discord.gg/GdsHhkJD9v"><i className="fa-brands fa-discord"></i> Join the Channel <i className="fa-solid fa-chevron-right"></i></Link>
    //             <Link className="g-action" target="_blank" to="//twitter.com/the13thgeek"><i className="fa-brands fa-x-twitter"></i> @the13thgeek <i className="fa-solid fa-chevron-right"></i></Link>
    //           </div>              
    //         </div>
    //         <div className='avatar'>
    //           <img src={twitchAvatar} alt="Twitch Cartoon Avatar" />
    //         </div>
    //       </div>
    //     </section>
        
    //   </main>
    //   <Footer />
    // </div>
  )
}

export default Twitch