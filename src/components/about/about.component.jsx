import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import './about.styles.scss';

const About = () => {
    return (
        <div className='about'>
            <div className="row gy-5">
                <div className="col-12 col-md-6">
                    <div className="main-heading">Industrial AI applications</div>
                    <div className="sub-heading">Predictive Maintenance</div>
                    <div className="text">Predict and explain failures of the equipment to prevent downtime and decrease maintenance costs</div>
                    <div className="sub-heading">Quality Control</div>
                    <div className="text">Predict, detect and explain quality issues in real time during production</div>
                    <div className="sub-heading">Optimization</div>
                    <div className="text">Predict, detect and explain quality issues in real time during production</div>
                </div>
                <div className="col-12 col-md-6">
                    <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc728543611d0f0f5c8a927_undraw_drone_surveillance_kjjg.png"
                        alt=""
                        className='about-image' />
                </div>
            </div>
        </div>
    )
}

export default About
