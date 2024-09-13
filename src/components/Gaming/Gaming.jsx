import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Gaming.scss';
    
const Gaming = () => {

    const [liveData, setLiveData] = useState();

    const thumbnailResize = (url, width, height) => {
        if (typeof url === 'undefined') {
          console.error('URL is undefined');
          console.error(width + 'x' + height);
          return;
        }
    
        return url
        .replace(/%\{width\}|\{width\}/g, width)
        .replace(/%\{height\}|\{height\}/g, height);    
    }

    const dateFormat = (input) => {
        let initDate = new Date(input);
        let convDate = initDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        return convDate;
    }
    
    const timeFormat = (input) => {
        let initTime = new Date(input);
        let convTime = initTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'America/Toronto'
        });
        return convTime + " EST";
    }

    const fetchLiveData = async () => {
        let response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${import.meta.env.VITE_TWITCH_CHANNEL_NAME}`, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_TWITCH_ACCESS_TOKEN}`,
            'Client-Id': `${import.meta.env.VITE_TWITCH_CLIENT_ID}`
          }
        });
        let data = await response.json();
        let output = data.data[0]
        return output;
    }

    useEffect(() => {
        const fetchLiveStatus = async () => {
            const liveData = await fetchLiveData();
            setLiveData(liveData);
        }
      
        fetchLiveStatus();
    });


  return (
    <section id="gaming" className="gaming">
        <div className="screen">
            { liveData ? (
                <div className="display-area" style={{backgroundImage: `url(${thumbnailResize(liveData.thumbnail_url, 1280, 720)})`}}>
                    <div className="pixel-filter"></div>
                </div>
            ) : (
            <div className="display-area default">
                <div className="pixel-filter"></div>
            </div>
            )}
            
        </div>
        <div className="info">
            <div className="descriptor home-5-gaming">
                <span className="title">Gaming</span>
            </div>
            <h2>Let's Play!</h2>
            <p>Do you like co-op, horror, building and rhythm games and enjoy watching someone be so bad at them? Come by my channel and hang out!</p>
            <div className="call-to-action">
                <Link className="cta-link" to="/twitch">See more<i className="fa-solid fa-chevron-right"></i></Link>
            </div>
            <hr />
            { liveData ? (
            <div className="now-playing">
                <div className="arrow">
                    <i className="fa-solid fa-angles-left"></i>
                </div>
                
                <div className="game-info">
                    <div className="category">Streaming Live Now</div>
                    <h3>{liveData.game_name}</h3>
                    <p className='game-title'>{ liveData.title.includes('|') ? liveData.title.substring(0, liveData.title.indexOf('|')).trim() : liveData.title }</p>
                    <div className="schedule">stream started {dateFormat(liveData.started_at)} {timeFormat(liveData.started_at)}</div>
                </div>
            </div>
            ) : ('')}
        </div>
    </section>
  )
}

export default Gaming