import React from 'react';
import Footer from '../../components/footer/footer.component';
import './contact-page.styles.scss';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className="contact-page__container">
            <div className="row gx-5 gy-5">
                <div className="col-md-12 col-lg-8">
                    <div className="contact-page--form">
                        <form className='form' >
                            <div className="form-heading">Contact us now</div>
                            <div className="form-sub--heading">Do you have a question? Contact us now!</div>
                                <div class="form__group">
                                    <label for="name" class="form__label">Full name</label>
                                    <input type="text" class="form__input" placeholder="Full name" id="name" required />
                                </div>
                                <div class="form__group">
                                    <label for="email" class="form__label">Email address</label>
                                    <input type="email" class="form__input" placeholder="Email address" id="email" required />
                                </div>
                                <div class="form__group">
                                    <label for="message" class="form__label">Your Message</label>
                                    <textarea type="message" class="form__input" placeholder="Your Message" id="message" required />
                                </div>
                                <div class="form__group">
                                    <button class="btn">SEND EMAIL</button>
                                </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="contact-page__details">
                        <div className="contact-page__details--heading">EMAIl</div>
                        <div className="contact-page__details--text">contact@vecros.com</div>
                        <div className="contact-page__details--heading">PHONE NUMBER</div>
                        <div className="contact-page__details--text">+91 XXX XXX XXXX</div>
                        <div className="contact-page__details--heading">OUR LOCATION</div>
                        <div className="contact-page__details--text">Module-4, TBIU, SYNERGY BUILDING,IIT DELHI, NEW DELHI -110016</div>
                    </div>
                </div>
            </div>
            </div>
            <div className="contact-page__heading">
                Subscribe to our newsletter
            </div>
            <div className="contact-page__sub--heading">
                stay updated with our latest news, product updates and much more.
            </div>
            <Footer />
        </div>
        
    )
}

export default ContactPage
