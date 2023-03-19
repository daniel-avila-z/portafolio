import React from 'react';
import '@styles/Contact.css'
import newsletter from '@icons/newsletter.png';
import textMe from '@icons/like.png'

const Contact = () => {
    return(
        <section className="contact-main-container">
        <div>
            <img src={newsletter} alt="newsletter"/>
            <div className="contact-left">
                <a href="">Contacto</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div>
            <img src={textMe} alt="like"/>
            <div className="contact-right">
                <a href="">Escribe</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </section>
    )
}

export default Contact;