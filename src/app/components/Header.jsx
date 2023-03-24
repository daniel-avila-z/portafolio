/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import '../styles/Header.css'
import gmail from '../../../public/assets/icons/gmail-logo.png'
import linkedin from '../../../public/assets/icons/linkedin-logo.png'
import telegram from '../../../public/assets/icons/telegram-logo.png'
import whatsapp from '../../../public/assets/icons/whatsapp-logo.png'
import github from '../../../public/assets/icons/github.png'
import Image from 'next/image'
export function Header () {
  return (
    <header>
      <section className='header-icon-container'>
        <div className='icons'>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=XBcJkvdsgxKZrnPCgLRpWjjpdRhkpMcbwpKlqmXMzxpWXtMpCPKZrjBCWFlgrnlwxLVtJZMrpRgRSGHb' target='_blank' alt='' rel='noreferrer'>
            <span>
              <Image
                className='icon'
                src={gmail}
                alt='gmail'
              />
            </span>
          </a>
          <a href='https://www.linkedin.com/in/daniel-avila-z/' target='_blank' alt='Mis certificados en Platzi' rel='noreferrer'>
            <span>
              <Image
                className='icon'
                src={linkedin}
                alt='linkedin'
              />
            </span>
          </a>
          <a href='https://t.me/Daniel_Aaz' target='_blank' alt='Mis certificados en Platzi' rel='noreferrer'>
            <span>
              <Image
                className='icon'
                src={telegram}
                alt='telegram'
              />
            </span>
          </a>
          <a href='https://wa.me/qr/XOCXSFFY33PZL1' target='_blank' alt='Mis certificados en Platzi' rel='noreferrer'>
            <span>
              <Image
                className='icon'
                src={whatsapp}
                alt='whatsapp'
              />
            </span>
          </a>
          <a href='' target='_blank' alt='Mis certificados en Platzi' rel='noreferrer'>
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
    </header>
  )
}
