import React from 'react';
import contact from '../../assets/contact.jpg';

export default function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className='contact-flex'>
                <div className='contact-flex__content'>
                    <h1>Contact</h1>
                    <input type='text' placeholder='Your name'/>
                    <input type='email' placeholder='Your email'/>
                    <input type='text' placeholder='Subject'/>
                    <input type='text' placeholder='Message'/>
                    <button>Send Message</button>
                </div>
                <div className='contact-flex__img'>
                    <img src={contact} alt="contact"/>
                </div>
            </div>
        </div>
    )
}

