import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './award-winning.styles.scss';

const AwardWinning = () => {
    return (
        <div className='award-winning'>
            <div className="award-winning__heading">Award Winning Innovations</div>
            <div className="row gx-5 gy-5 d-flex align-items-center">
                <div className="col-md-12 col-lg-4 ">
                    <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc727ccb7aa9a5d1df3b46c_stl_logo.png"
                        className='award-winning__image' alt="" />
                    <div className="sub-heading">Winner of 2020 Udaan</div>
                    <a href="#" className='award-winning__link'>Read More</a>
                </div>
                <div className="col-md-12 col-lg-4">
                    <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5dc21d3d6eea460752b64_nvidia-inception-program-badge-rgb-for-screen.png" 
                        alt="" className="award-winning__image-1" />
                    <div className="sub-heading">Part of Nvidia Inception</div>
                    <a href="#" className='award-winning__link'>Read More</a>
                </div>
                <div className="col-md-12 col-lg-4">
                    <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/6106423a0bdddee861ac7b34_vecros%20microsfot%20for%20startup.jpg" 
                        alt="" className="award-winning__image-1" />
                    <div className="sub-heading">Microsoft for startups</div>
                    <a href="#" className='award-winning__link'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default AwardWinning
