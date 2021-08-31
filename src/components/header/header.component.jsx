import React from 'react';

import play from '../../assets/play.png';

import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <video autoPlay muted className='video'>
                <source src='https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fe335312cb0f4ed278c586b_webback22-transcode.mp4'
                    type='video/mp4' />
                <source src='https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fe335312cb0f4ed278c586b_webback22-transcode.webm'
                    type='video/webm' />
            </video>
            <div className="bg-video" />
            <div className="header-text__content">
                <h1 className="heading">
                    Breakthrough Robotics for your Inspections
                </h1>
                <p className="paragraph">
                    Harness power of computer vision and robotics for autonomous inspections at scale
                </p>
                <a href="https://www.youtube.com/watch?v=u--o2xrX2rY&t=2s" target='_blank' className='w-inline-block'>
                <div className="play-container">
                    <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5d90a8dee63d499c3abd4_Icon-play-white.png" 
                        alt="play_icon" 
                        className="play" 
                    />
                </div>
                </a>
            </div>
        </div>
    )
}

export default Header
