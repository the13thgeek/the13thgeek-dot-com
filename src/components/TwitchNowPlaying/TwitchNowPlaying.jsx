import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { NowPlaying_Data } from '../../assets/nowplaying_data';
import './TwitchNowPlaying.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import imgFeatureFilter from '../../assets/twitch/slideshow-filter.png';

const TwitchNowPlaying = () => {    

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