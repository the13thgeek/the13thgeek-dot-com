import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { dateFormatter, thumbnailResize } from '../../utils/utils';
import { fetchLiveData } from '../../utils/twitchUtils';
import './Gaming.scss';
    
const Gaming = () => {

    const [loading, setLoading] = useState(true);
    const [liveData, setLiveData] = useState();

    useEffect(() => {       
        const loadLiveData = async () => {
            const data = await fetchLiveData();
            if(data) {
                setLiveData(data);
            }
            setLoading(false);
        }
        loadLiveData();
    },[]);


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
            <div className="descriptor home-6-gaming">
                <span className="title">Gaming</span>
            </div>
            <h2>Let's Play!</h2>
            <p>Do you like co-op, horror, building and rhythm games and enjoy watching someone be so bad at them? Come by my channel and hang out!</p>
            <div className="call-to-action">
                <Link className="cta-link" to="/twitch">See more<i className="fa-solid fa-chevron-right"></i></Link>
            </div>
            <hr />
            { loading ? <p>Loading...</p> : ''}
            { liveData ? (
            <div className="now-playing">
                <div className="arrow">
                    <i className="fa-solid fa-angles-left"></i>
                </div>
                
                <div className="game-info">
                    <div className="category">Streaming Live Now</div>
                    <h3>{liveData.game_name}</h3>
                    <p className='game-title'>{ liveData.title.includes('|') ? liveData.title.substring(0, liveData.title.indexOf('|')).trim() : liveData.title }</p>
                    <div className="schedule">stream started {dateFormatter('simple-date', liveData.started_at)} {dateFormatter('simple-time',liveData.started_at)}</div>
                </div>
            </div>
            ) : ('')}
        </div>
    </section>
  )
}

export default Gaming