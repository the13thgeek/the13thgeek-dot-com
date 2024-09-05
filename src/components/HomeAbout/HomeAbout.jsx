import React from 'react';
import './HomeAbout.scss';
import { NavLink } from "react-router-dom";
import imgAvatarHi from '../../assets/home/avatar-geek-hi.png';

const HomeAbout = () => {0
  return (
    <section id="home-about" className="home-about">
        <div className="content-container">
            <div className="row title-bar">
                <div className="col">
                    <div className="descriptor home-2-profile">
                        <span className="title">Profile</span>
                    </div>
                    <h2>In a nutshell</h2>
                </div>
                <div className="col">
                    <div className="call-to-action">
                        <NavLink to="/about" className="cta-link">See more <i className="fa-solid fa-chevron-right"></i></NavLink>
                    </div>
                </div>
            </div>
            <div className="row introduction">
                <div className="col spacer">
                    <img src={imgAvatarHi} alt="Avatar waving hi" />
                </div>
                <div className="col type-1">
                    <div className="wrapper">
                        <h3 className='type-1'>Aldreich</h3>
                        <p className="ipa">[ˈɔːldrɪtʃ]</p>
                        <p className="type">noun</p>
                        <ol className="definitions">
                            <li>a versatile developer who expertly blends design and coding to create cohesive, user-friendly digital experiences</li>
                            <li>an enthusiast of gaming and web design, known for a passion that spans from retro games to modern web technologies</li>
                            <li>the alter-ego behind the social media handle <b>@the13thgeek</b></li>
                        </ol>
                    </div>
                </div>
                <hr />
                <div className="col type-2">
                    <div className="wrapper">
                        <h3 className='type-2'>the13thgeek</h3>
                        <p className="ipa">[ðə ˈθɜːrˌtiːnθ ɡiːk]</p>
                        <p className="type">noun</p>
                        <ol className="definitions">
                            <li>a variety streamer known for quirky humour and spontaneous bursts of helium-infused voice</li>
                            <li>a voice in the Twitterverse posting everything from the latest <i>tokusatsu</i> releases to the latest tech musings and animated GIF memes</li>
                            <li>a visual storyteller whose grid offers a blend of travels, cosplays and sneak peeks from his daily life</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    
    
  )
}

export default HomeAbout