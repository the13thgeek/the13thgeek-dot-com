import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './TwitchNowPlaying.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import imgFeatureFilter from '../../assets/twitch/slideshow-filter.png';
import imgFeatureEvilWithin from '../../assets/twitch/feature/slide-evil-within.jpg';
import imgFeatureEvilWithinLogo from '../../assets/twitch/feature/logo-evil-within.png';
import imgFeatureHelldivers2 from '../../assets/twitch/feature/slide-helldivers2.jpg';
import imgFeatureHelldivers2Logo from '../../assets/twitch/feature/logo-helldivers2.png';
import imgFeatureParkitect from '../../assets/twitch/feature/slide-parkitect.jpg';
import imgFeatureParkitectLogo from '../../assets/twitch/feature/logo-parkitect.png';
import imgFeatureDKC from '../../assets/twitch/feature/slide-dkctf.jpg';
import imgFeatureDKCLogo from '../../assets/twitch/feature/logo-dkctf.png';

const TwitchNowPlaying = () => {    

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
    <section id="now-playing" className="now-playing">
        <div className="content-container title-bar">
            <div className="descriptor twitch-1-nowplaying">
                <span className="title">Now Playing</span>
            </div>
            <h1><i className="fa-brands fa-twitch"></i> the13thgeek on Twitch</h1>
        </div>
        <Swiper 
            autoplay={{ delay: 5000, disableOnInteraction: false }} 
            loop={true}
            slidesPerView={'auto'}
            speed={500}
            centeredSlides={true}
            pagination={{
                el: '.np-pagination'
            }}
            modules={[Pagination, Autoplay]} 
            className="carousel-now-playing">
            {pageFeatures.map((slide,index) => 
                <SwiperSlide key={index} className='slide-item'>
                    <div className="slide-wrapper">
                        <img src={slide.background} className='game-photo' alt="" />
                        <img src={imgFeatureFilter} className='filter' alt="" />
                        <div className="contents">
                            <img src={slide.logo} alt={slide.gametitle} className="game-logo" />
                            <h3>{slide.title}</h3>
                            <p className="schedule">{slide.schedule ? ('Streams ' + slide.schedule) : 'Streaming in Regular Rotation' }</p>
                            <p className='caption'>{slide.description}</p>
                        </div>
                    </div>
                </SwiperSlide>    
            )}
        </Swiper>
        <div className="np-pagination"></div>
    </section>
  )
}

export default TwitchNowPlaying