import React from 'react';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo__container">
                <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/61055ad9778a964cce077590_logo_inv_R_white_blackbgm.png"
                    alt="" className="footer-logo" />
            </div>
            <div className="row">
                <div className="col-12 col-md-12 text-center">
                <div class="footer__navigation">
                <ul class="footer__list">                        
                    <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">Solutions</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">products</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">contact</a></li>
                    <li class="footer__item"><a href="#" class="footer__link">blog</a></li>
                </ul>
            </div>  
                </div>
                
            </div>
        </div>
    )
}

export default Footer
