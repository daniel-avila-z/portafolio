import React from 'react'
import '../styles/Contact.css'
import newsletter from '../../../public/assets/icons/newsletter.png'
import textMe from '../../../public/assets/icons/like.png'
import Image from 'next/image'
export function Contact () {
  return (
    <section className='contact-main-container'>
      <div>
        <Image src={newsletter} alt='newsletter' />
        <div className='contact-left'>
          <a href=''>Contacto</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <Image src={textMe} alt='like' />
        <div className='contact-right'>
          <a href=''>Escribe</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  )
}

