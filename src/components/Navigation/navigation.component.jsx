import React, { useState } from 'react';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

import './navigation.styles.scss';

function Navigation() {
    const [click, setClick] = useState(false);
 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);    
        return (
            <>
                <nav className='navigation'>
                    <Link to='/' className='navigation-logo' onClick={closeMobileMenu}>
                        <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/61055ad9778a964cce077590_logo_inv_R_white_blackbgm.png"
                            className='logo' alt="company_logo" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click 
                            ?  
                            <FontAwesomeIcon icon={faTimes} className='fa-times' /> 
                            : 
                            <FontAwesomeIcon icon={faBars} className='fa-bars' />
                        }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#solution' className='nav-links'onClick={closeMobileMenu}>
                                SOLUTIONS
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-links' onClick={closeMobileMenu}>
                                PRODUCTS
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-links' onClick={closeMobileMenu}>
                                INVESTORS
                            </a>
                        </li> 
                        <li className='nav-item'>
                            <a href='#' className='nav-links' onClick={closeMobileMenu}>
                                BLOG
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-links background' onClick={closeMobileMenu}>
                                SHOP
                            </a>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links background' onClick={closeMobileMenu}>
                                CONTACT
                            </Link>
                        </li>               
                    </ul>
                </nav>
            </>
        );
};
    
export default Navigation;


















































































































