import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './client.styles.scss';

const Client = () => {
    return (
        <div className='client'>
            <div className="client__heading">We've been trusted by</div>
            <div className="row gy-5 gx-5 d-flex align-items-center">
                <div className="col-sm-6 col-md-3">
                    <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5dbacc3cdff35c14d47e1_logo.png" 
                        alt="" className="client__logo" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5dbc710e3c7d98bed4d62_StartUp-Oasis-logo.jpg" 
                        alt="" className="client__logo" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5dbfb356e0d41706520e1_dst-logo-e1433763866846.png" 
                        alt="" className="client__logo" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img src="https://uploads-ssl.webflow.com/5fc5d909ce29964856339c53/5fc5dc21d3d6eea460752b64_nvidia-inception-program-badge-rgb-for-screen.png" 
                        alt="" className="client__logo-1" />
                </div>
            </div>
        </div>
    )
}

export default Client
