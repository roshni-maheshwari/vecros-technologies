import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './team.styles.scss';

const Team = () => {
    return (
        <div className='team' id='about'>
            <div className="team__text-box">
                <div className="team__heading">The Best Team Ever</div>
                <div className="team__text">Hustlers, Hackers and Hipsters of our universe.</div>
            </div>
            <div className="row gy-5 gx-5">
                <div className="col-12 col-md-6 team__background">
                    <div className="team__background-container">
                        <div className="team__background-title">BESTA PREM SAI</div>
                        <div className="team__background-text">Chief Executive Officer</div>
                        <a href="https://www.facebook.com/ps.premsai" target='_blank' className='social-button w-inline-block'>
                            <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5d90a8dee63a80dc3abd3_Icon-facebook.png"
                                className='social-icon' alt="" />
                        </a>
                        <a href="https://twitter.com/prem48science" target='_blank' className='social-button w-inline-block'>
                            <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5d90a8dee639d3ec3ac30_Icon-twitter.png"
                                className='social-icon' alt="" />
                        </a>
                        <a href="https://www.google.com/" className='social-button w-inline-block w-condition-invisible' target='_blank'>
                            <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5d90a8dee63ed6cc3ac19_Icon-google.png"
                                className='social-icon' alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 team__background-1">
                    <div className="team__background-container">
                        <div className="team__background-title">Sai Haneesh Allu</div>
                        <div className="team__background-text">Chief Technology Officer</div>
                        <a href="https://www.facebook.com/haneesh.allu" className='social-button w-inline-block' target='_blank'>
                            <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5d90a8dee63a80dc3abd3_Icon-facebook.png"
                                className='social-icon' alt="" />
                        </a>
                        <a href="https://twitter.com/" target='_blank' className='social-button w-inline-block'>
                            <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5d90a8dee639d3ec3ac30_Icon-twitter.png"
                                className='social-icon' alt="" />
                        </a>
                        <a href="https://www.google.com/" className='social-button w-inline-block w-condition-invisible' target='_blank'>
                            <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5d90a8dee63ed6cc3ac19_Icon-google.png"
                                className='social-icon' alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-12 col-sm-4 border">
                    <img src="https://uploads-ssl.webflow.com/5fc5d90a8dee63ce71c3ab53/5fcb08e6819e78062cafa93e_129546960_2776103215980575_4946080766385883242_o.jpg"
                        className='team-member' alt="" />
                    <div className="team-member-details">
                        <div className="team-member__name">Vivek Muskan</div>
                        <div className="team-member__about">Embedded Programmer</div>
                    </div>
                </div>
                <div className="col-12 col-sm-4 border">
                    <img src="https://uploads-ssl.webflow.com/5fc5d90a8dee63ce71c3ab53/5fcb08e6819e78062cafa93e_129546960_2776103215980575_4946080766385883242_o.jpg"
                        className='team-member' alt="" />
                    <div className="team-member-details">
                        <div className="team-member__name">Vivek Muskan</div>
                        <div className="team-member__about">Embedded Programmer</div>
                    </div>
                </div>
                <div className="col-12 col-sm-4 border">
                    <img src="https://uploads-ssl.webflow.com/5fc5d90a8dee63ce71c3ab53/5fcb08e6819e78062cafa93e_129546960_2776103215980575_4946080766385883242_o.jpg"
                        className='team-member' alt="" />
                    <div className="team-member-details">
                        <div className="team-member__name">Vivek Muskan</div>
                        <div className="team-member__about">Embedded Programmer</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Team
