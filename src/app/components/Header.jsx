'use client'
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'
// import React from 'react'
import '../styles/Header.css'
import gmail from '../../../public/assets/icons/gmail-logo.png'
import linkedin from '../../../public/assets/icons/linkedin-logo.png'
import telegram from '../../../public/assets/icons/telegram-logo.png'
import whatsapp from '../../../public/assets/icons/whatsapp-logo.png'
import github from '../../../public/assets/icons/github.png'
import Image from 'next/image'

function Modal ({ setOpen }) {
  return (
    <div className='modal'>
      <div className='modalContent'>
        <h2 className='titulo-correo'>Este es mi correo electronico:</h2>
        <h3 className='correo'>daniel.avila.dev@gmail.com</h3>
        <div className='close-container'>
          <span className='close' onClick={() => setOpen(false)}>
            Cerrar
          </span>
        </div>
      </div>
    </div>
  )
}

export function Header () {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <section className='header-icon-container'>
        <div className='icons'>
          <a target='_blank' alt='Gmail' rel='noreferrer' onClick={() => setOpen(true)}>
            <span>
              <Image
                className='icon'
                src={gmail}
                alt='gmail'
              />
            </span>

          </a>
          <a href='https://www.linkedin.com/in/daniel-avila-z/' target='_blank' alt='Linkedin' rel='noreferrer'>
            <span>
              <Image
                className='icon'
                src={linkedin}
                alt='linkedin'
              />
            </span>
          </a>
          <a href='https://t.me/Daniel_Aaz' target='_blank' alt='Telegram' rel='noreferrer'>
            <span>
              <Image
                className='icon'
                src={telegram}
                alt='telegram'
              />
            </span>
          </a>
          <a href='https://wa.me/qr/XOCXSFFY33PZL1' target='_blank' alt='WhatsApp' rel='noreferrer'>
            <span>
              <Image
                className='icon'
                src={whatsapp}
                alt='whatsapp'
              />
            </span>
          </a>
          <a href='https://github.com/daniel-avila-z' target='_blank' alt='GitHub' rel='noreferrer'>
            <span>
              <Image className='icon' src={github} alt='github' />
            </span>
          </a>
        </div>
      </section>
      <nav>
        {/* <section className="profile-link-left">
            <a href="perfil.html">Ultimo Post</a>
            <a href="blogs.html">Blog</a>
          </section> */}
        <div className='comentario-container'>
          <h2 className='comentario'>//Zona en construción 👨‍💻</h2>
        </div>
        {/* <section className="profile-link-right">
            <a href="perfil.html">Más sobre mí</a>
          </section> */}
      </nav>
      {open && <Modal setOpen={setOpen} />}
    </header>
  )
}
