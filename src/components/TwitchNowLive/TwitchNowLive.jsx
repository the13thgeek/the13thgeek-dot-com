import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormatter, thumbnailResize } from '../../utils/utils';
import imgLiveFilter from '../../assets/twitch/slideshow-filter.png';
import './TwitchNowLive.scss';

const TwitchNowLive = ({ liveData }) => {
  return (
    <section id="live-stream" className="live-stream">
        <div className="content-container">
            <div className="title-bar">
                <div className="descriptor twitch-1-livestream">
                    <span className="title">Live Stream</span>
                </div>
                <h1><i className="fa-brands fa-twitch"></i> the13thgeek is live!</h1>
            </div>
            <div className="live-grid">
                <div className="item thumbnail">
                    <div className="live-indicator">
                        <span><i className="fa-solid fa-video"></i>&nbsp;&nbsp;Now On Air</span>
                    </div>
                    <div className="stream-shot">
                        <img src='https://the13thgeek-nodejs.fly.dev/twitch-live/0min.jpg' alt="Streaming now"></img>
                    </div>
                    <div className="timeframe"><p>&gt; Now</p></div>
                </div>
                <div className="item thumbnail">
                    <div className="stream-shot">
                        <img src='https://the13thgeek-nodejs.fly.dev/twitch-live/5min.jpg' alt="5 mins ago"></img>
                    </div>
                    <div className="timeframe"><p>&gt;&gt; 5 mins ago</p></div>
                </div>
                <div className="item thumbnail">
                    <div className="stream-shot">
                        <img src='https://the13thgeek-nodejs.fly.dev/twitch-live/10min.jpg' alt="10 mins ago"></img>
                    </div>
                    <div className="timeframe"><p>&gt;&gt;&gt; 10 mins ago</p></div>
                </div>
                <div className="item information">
                    <div className="info-box">
                        <h3 className='live-title'>{ liveData.title.includes('|') ? liveData.title.substring(0, liveData.title.indexOf('|')).trim() : liveData.title }</h3>
                        <p className="caption">@the13thgeek is now live on Twitch!<br />Currently playing: <b>{liveData.game_name}</b></p>
                        <p className="schedule">Stream started {dateFormatter('simple-time',liveData.started_at)}</p>
                        <div className="call-to-action">
                            <Link className="cta-link" target='_blank' to="https://twitch.tv/the13thgeek"><i className="fa-brands fa-twitch"></i> Watch Live!<i className="fa-solid fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="title-bar">
                <div className="descriptor twitch-1-livestream">
                    <span className="title">Live Stream</span>
                </div>
                <h1><i className="fa-brands fa-twitch"></i> the13thgeek is live!</h1>
            </div>
            <div className="live-tile">
                <div className="live-wrapper" style={{backgroundImage: `url(${thumbnailResize(liveData.thumbnail_url, 1280, 720)})`}}>
                    <img src={imgLiveFilter} className='filter' alt="" />
                    <div className="contents">
                        <div className="live-indicator">
                          <span><i className="fa-solid fa-video"></i>&nbsp;&nbsp;Now On Air</span>
                        </div>
                        <h3 className='live-title'>{ liveData.title.includes('|') ? liveData.title.substring(0, liveData.title.indexOf('|')).trim() : liveData.title }</h3>
                        <p className="schedule">Stream started {dateFormatter('simple-time',liveData.started_at)}</p>
                        <p className="caption">@the13thgeek is now live on Twitch!<br />Currently playing: <b>{liveData.game_name}</b></p>
                    </div>
                    <div className="call-to-action">
                        <Link className="cta-link" target='_blank' to="https://twitch.tv/the13thgeek"><i className="fa-brands fa-twitch"></i> Watch Live!<i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div> */}
        </div>
    </section>        
  )
}

export default TwitchNowLive