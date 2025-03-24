import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { NowPlaying_Data } from '../../assets/nowplaying_data';
import './TwitchNowPlaying.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import imgFeatureFilter from '../../assets/twitch/slideshow-filter.png';
// import imgFeatureCultOfTheLamb from '../../assets/twitch/feature/slide-cult.jpg';
// import imgFeatureCultOfTheLambLogo from '../../assets/twitch/feature/logo-cult.png';
// import imgFeatureRitaRewind from '../../assets/twitch/feature/slide-ritarewind.jpg';
// import imgFeatureRitaRewindLogo from '../../assets/twitch/feature/logo-ritarewind.png';
// import imgFeatureSmpJamboree from '../../assets/twitch/feature/slide-smpjamboree.jpg';
// import imgFeatureSmpJamboreeLogo from '../../assets/twitch/feature/logo-smpjamboree.png';
// import imgFeatureBearBreakfast from '../../assets/twitch/feature/slide-b&b.jpg';
// import imgFeatureBearBreakfastLogo from '../../assets/twitch/feature/logo-b&b.png';
// import imgFeatureMidnight from '../../assets/twitch/feature/slide-midnight.jpg';
// import imgFeatureMidnightLogo from '../../assets/twitch/feature/logo-midnight.png';
// import imgFeaturePhasmophobia from '../../assets/twitch/feature/slide-phasmophobia.jpg';
// import imgFeaturePhasmophobiaLogo from '../../assets/twitch/feature/logo-phasmophobia.png';
// import imgFeatureDontScream from '../../assets/twitch/feature/slide-dontscream.jpg';
// import imgFeatureDontScreamLogo from '../../assets/twitch/feature/logo-dontscream.png';
// import imgFeatureRE5 from '../../assets/twitch/feature/slide-re5.jpg';
// import imgFeatureRE5Logo from '../../assets/twitch/feature/logo-re5.png';
// import imgFeatureNSMBU from '../../assets/twitch/feature/slide-nsmbu.jpg';
// import imgFeatureNSMBULogo from '../../assets/twitch/feature/logo-nsmbu.png';
// import imgFeatureTSW4 from '../../assets/twitch/feature/slide-tsw4.jpg';
// import imgFeatureTSW4Logo from '../../assets/twitch/feature/logo-tsw4.png';
// import imgFeatureEvilWithin from '../../assets/twitch/feature/slide-evil-within.jpg';
// import imgFeatureEvilWithinLogo from '../../assets/twitch/feature/logo-evil-within.png';
// import imgFeatureHelldivers2 from '../../assets/twitch/feature/slide-helldivers2.jpg';
// import imgFeatureHelldivers2Logo from '../../assets/twitch/feature/logo-helldivers2.png';
// import imgFeatureParkitect from '../../assets/twitch/feature/slide-parkitect.jpg';
// import imgFeatureParkitectLogo from '../../assets/twitch/feature/logo-parkitect.png';
// import imgFeatureDKC from '../../assets/twitch/feature/slide-dkctf.jpg';
// import imgFeatureDKCLogo from '../../assets/twitch/feature/logo-dkctf.png';
// import imgFeaturePC2 from '../../assets/twitch/feature/slide-pc2.jpg';
// import imgFeaturePC2Logo from '../../assets/twitch/feature/logo-pc2.png';

const TwitchNowPlaying = () => {    

// const pageFeatures = [
//     // {
//     //     'background': imgFeatureMidnight,
//     //     'logo': imgFeatureMidnightLogo,
//     //     'gametitle': null,
//     //     'title': 'Midnight Express',
//     //     'schedule': 'all of October',
//     //     'description': 'We have a fun lineup of both spoopy and spooky games prepared for the entire Halloween season! Costumes are (semi) mandatory.',
//     //     'scheme': 'dark'
//     // },
//     {
//         'background': imgFeatureRitaRewind,
//         'logo': imgFeatureRitaRewindLogo,
//         'gametitle': 'Mighty Morphin Power Rangers: Rita\'s Rewind',
//         'title': 'It\'s Morphin\' Time!',
//         'schedule': null,
//         'description': 'Bring out your Morphers and join @the13thgeek and friends as they morph into action and retake Angel Grove!'
//     },
//     {
//         'background': imgFeatureSmpJamboree,
//         'logo': imgFeatureSmpJamboreeLogo,
//         'gametitle': 'Super Mario Party Jamboree',
//         'title': 'The Party Is Back!',
//         'schedule': null,
//         'description': 'Come for the stars, stay for the mayhem. Friendships will be put to the ultimate test... again.'
//     },
//     {
//         'background': imgFeatureBearBreakfast,
//         'logo': imgFeatureBearBreakfastLogo,
//         'gametitle': 'Bear & Breakfast',
//         'title': 'AirGeek B&B',
//         'schedule': null,
//         'description': '@the13thgeek\'s running a cozy inn... as a teddy bear! Watch as he balances hospitality, chaos and fur-covered pancakes!'
//     },
//     {
//         'background': imgFeaturePC2,
//         'logo': imgFeaturePC2Logo,
//         'gametitle': 'Planet Coaster 2',
//         'title': "Splash'n'Fun!",
//         'schedule': null,
//         'description': "Let's check out the new Planet Coaster sequel - now with water parks! Don\'t forget to bring sunblock."
//     },
//     // {
//     //     'background': imgFeatureCultOfTheLamb,
//     //     'logo': imgFeatureCultOfTheLambLogo,
//     //     'gametitle': 'Cult of the Lamb',
//     //     'title': 'Hail the Thirteenth Enclave',
//     //     'schedule': null,
//     //     'description': '@the13thgeek leads an adorable yet creepy cult where followers are recruited, sacrifices happen, and the chipmunk voice filter comes out in full force!',
//     //     'scheme': 'dark'
//     // },
//     {
//         'background': imgFeatureRE5,
//         'logo': imgFeatureRE5Logo,
//         'gametitle': 'Resident Evil 5',
//         'title': 'Kijuju Carnage',
//         'schedule': null,
//         'description': '@the13thgeek and friends face zombies, explosions, and co-op madness. Will they survive? Probably not, but it\'ll be epic!',
//         'scheme': 'dark'
//     },
//     // {
//     //     'background': imgFeatureTSW4,
//     //     'logo': imgFeatureTSW4Logo,
//     //     'gametitle': 'Train Sim World 4',
//     //     'title': 'Back on the Rails',
//     //     'schedule': null,
//     //     'description': '@the13thgeek takes the conductor\'s seat and going on scenic routes! Will the trains stay on track or derail into chaos?'
//     // },
//     // {
//     //     'background': imgFeaturePhasmophobia,
//     //     'logo': imgFeaturePhasmophobiaLogo,
//     //     'gametitle': null,
//     //     'title': 'House Haunters',
//     //     'schedule': null,
//     //     'description': '@the13thgeek teams up with terrified friends to face the mumu. Expect screams, questionable teamwork, and someone (probably him) hiding in a closet.',
//     //     'scheme': 'dark'
//     // },
//     // {
//     //     'background': imgFeatureDontScream,
//     //     'logo': imgFeatureDontScreamLogo,
//     //     'gametitle': null,
//     //     'title': 'Found Footage 2.0',
//     //     'schedule': 'throughout October',
//     //     'description': 'A horror game that tells @the13thgeek not to scream? Challenge accepted! Will he last for 18 minutes?',
//     //     'scheme': 'dark'
//     // },
//     // {
//     //     'background': imgFeatureDKC,
//     //     'logo': imgFeatureDKCLogo,
//     //     'gametitle': 'Donkey Kong Country: Tropical Freeze',
//     //     'title': "Going Bananas!",
//     //     'schedule': 'Tuesdays @7pm EST',
//     //     'description': '@the13thgeek\'s never played a DK game before. How will he fare platforming across a relentless jungle with a dozen projectiles flying around? Will he need Funky Kong\'s assistance at some point?',
//     //     'scheme': 'dark'
//     // },
//     // {
//     //     'background': imgFeatureEvilWithin,
//     //     'logo': imgFeatureEvilWithinLogo,
//     //     'gametitle': 'The Evil Within',
//     //     'title': "Terrors of the Unknown",
//     //     'schedule': 'Thursdays @ 7pm EST',
//     //     'description': 'Dive into psychological horror as @the13thgeek faces Sebastian Castellano\'s nightmares and tries to stay calm. Prepare for plenty of screams!',
//     //     'scheme': 'dark'
//     // },
//     // {
//     //     'background': imgFeatureNSMBU,
//     //     'logo': imgFeatureNSMBULogo,
//     //     'gametitle': 'New Super Mario Bros U Deluxe',
//     //     'schedule': null,
//     //     'description':  'Classic platforming fun! Watch @the13thgeek stomp Goombas and save the day... or miss a jump. Either way, it\'s a blast!'
//     // },
//     {
//         'background': imgFeatureHelldivers2,
//         'logo': imgFeatureHelldivers2Logo,
//         'gametitle': 'Helldivers II',
//         'title': "Say Hello to Democracy!",
//         'schedule': null,
//         'description': '@the13thgeek teams up with streamers to take on alien hordes in space, causing chaos and accidental explosions. Friendly fire? Definitely.',
//         'scheme': 'dark'
//     }
//     // {
//     //     'background': imgFeatureParkitect,
//     //     'logo': imgFeatureParkitectLogo,
//     //     'gametitle': 'Parkitect',
//     //     'title': "Let's Build a Theme Park!",
//     //     'schedule': 'Mondays @ 3pm EST',
//     //     'description': 'Watch @the13thgeek build the ultimate theme park --- whether it\'s the happiest place or a total disaster depends on the day. Lost guests guaranteed.',
//     //     'scheme': 'dark'
//     // }
// ]

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
            {NowPlaying_Data
                .filter(slide => slide.show_game)
                .map((slide,index) => 
                <SwiperSlide key={index} className='slide-item'>
                <div className="slide-wrapper">
                    <img src={`/assets/twitch/feature/slide-${slide.game_id}.jpg`} className='game-photo' />
                    <img src={imgFeatureFilter} className='filter' alt="" />
                    <div className="contents">
                        <img src={`/assets/twitch/feature/logo-${slide.game_id}.png`} alt={slide.gametitle} className="game-logo" />
                        <h3>{slide.stream_title}</h3>
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