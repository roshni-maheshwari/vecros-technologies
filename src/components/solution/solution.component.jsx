import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './solution.styles.scss';


const Solution = () => {
    return (
        <div className='solution' id='solution'>
            <div className="row gy-5">
                <div className="col-12 background ">
                    <div className="solution__text-box">
                        <h5 className="solution__title">REMOTE WORK IS NEW NORMAL</h5>
                        <p className="solution__text">
                            our warehouse drones help you automate cycle counts of inventory. Takes only 1 hour to scan an est. 200-400 pallet positions per drone (includes recharge time).
                        </p>
                        <a href="#" class="btn">Read More</a>
                    </div>
                    <div className="solution__image-box">
                        <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/610abe8218c86b0d03cdbd65_81243378_581936859264267_4604683903179948032_n.jpg"
                            className='image' alt="" />
                    </div>
                </div>
                <div className="col-12 background">
                    <div className="solution__text-box">
                        <h5 className="solution__title">3D mapping has never been easy</h5>
                        <p className="solution__text">
                            our drone is equipped with vision sensors that can map entire faciltiy and generate 3D map of the same.
                        </p>
                        <a href="#" class="btn">Read More</a>
                    </div>
                    <div className="solution__image-box">
                        <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fca5d644568a5f3c7311ab2_vlcsnap-2020-12-04-21h31m22s678.png"
                            className='image' alt="" />
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Solution;
