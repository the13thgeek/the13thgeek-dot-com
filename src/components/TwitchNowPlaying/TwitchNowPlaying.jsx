import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './TwitchNowPlaying.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import imgFeatureFilter from '../../assets/twitch/slideshow-filter.png';
import imgFeatureCultOfTheLamb from '../../assets/twitch/feature/slide-cult.jpg';
import imgFeatureCultOfTheLambLogo from '../../assets/twitch/feature/logo-cult.png';
import imgFeatureMidnight from '../../assets/twitch/feature/slide-midnight.jpg';
import imgFeatureMidnightLogo from '../../assets/twitch/feature/logo-midnight.png';
import imgFeaturePhasmophobia from '../../assets/twitch/feature/slide-phasmophobia.jpg';
import imgFeaturePhasmophobiaLogo from '../../assets/twitch/feature/logo-phasmophobia.png';
import imgFeatureDontScream from '../../assets/twitch/feature/slide-dontscream.jpg';
import imgFeatureDontScreamLogo from '../../assets/twitch/feature/logo-dontscream.png';
import imgFeatureEvilWithin from '../../assets/twitch/feature/slide-evil-within.jpg';
import imgFeatureEvilWithinLogo from '../../assets/twitch/feature/logo-evil-within.png';
import imgFeatureHelldivers2 from '../../assets/twitch/feature/slide-helldivers2.jpg';
import imgFeatureHelldivers2Logo from '../../assets/twitch/feature/logo-helldivers2.png';
import imgFeatureParkitect from '../../assets/twitch/feature/slide-parkitect.jpg';
import imgFeatureParkitectLogo from '../../assets/twitch/feature/logo-parkitect.png';
// import imgFeatureDKC from '../../assets/twitch/feature/slide-dkctf.jpg';
// import imgFeatureDKCLogo from '../../assets/twitch/feature/logo-dkctf.png';

const TwitchNowPlaying = () => {    

const pageFeatures = [
    {
        'background': imgFeatureMidnight,
        'logo': imgFeatureMidnightLogo,
        'gametitle': null,
        'title': 'Midnight Express',
        'schedule': 'all of October',
        'description': 'We have a fun lineup of both spoopy and spooky games prepared for the entire Halloween season! Costumes are (semi) mandatory.',
        'scheme': 'dark'
    },
    {
        'background': imgFeatureCultOfTheLamb,
        'logo': imgFeatureCultOfTheLambLogo,
        'gametitle': 'Cult of the Lamb',
        'title': 'Hail the Thirteenth Enclave',
        'schedule': 'Tuesdays @7pm EST',
        'description': 'Join the Cult and follow through the crusade against heretics, non-believers and spread the Word about the One True Cult.',
        'scheme': 'dark'
    },
    {
        'background': imgFeaturePhasmophobia,
        'logo': imgFeaturePhasmophobiaLogo,
        'gametitle': null,
        'title': 'House Haunters',
        'schedule': 'throughout October',
        'description': '@the13thgeek collaborates with friends as they try to investigate paranormal activities, figure out what entity is haunting and make it back out alive!',
        'scheme': 'dark'
    },
    {
        'background': imgFeatureDontScream,
        'logo': imgFeatureDontScreamLogo,
        'gametitle': null,
        'title': 'Found Footage 2.0',
        'schedule': 'throughout October',
        'description': '@the13thgeek is lost in the middle of nowhere and is only equipped with an analogue video camera. Will he last 18 minutes without screaming?',
        'scheme': 'dark'
    },
    // {
    //     'background': imgFeatureDKC,
    //     'logo': imgFeatureDKCLogo,
    //     'gametitle': 'Donkey Kong Country: Tropical Freeze',
    //     'title': "Going Bananas!",
    //     'schedule': 'Tuesdays @7pm EST',
    //     'description': '@the13thgeek\'s never played a DK game before. How will he fare platforming across a relentless jungle with a dozen projectiles flying around? Will he need Funky Kong\'s assistance at some point?',
    //     'scheme': 'dark'
    // },
    {
        'background': imgFeatureEvilWithin,
        'logo': imgFeatureEvilWithinLogo,
        'gametitle': 'The Evil Within',
        'title': "Terrors of the Unknown",
        'schedule': 'Thursdays @ 7pm EST',
        'description': 'On this stream, expect a lot of nervous laughter and jump scares as @the13thgeek navigates through Sebastian Castellano\'s nightmares.',
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
        'schedule': 'Mondays @ 3pm EST',
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
                el: '.np-pagination',
                clickable: true
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