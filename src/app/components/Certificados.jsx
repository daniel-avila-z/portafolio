import React from 'react'
import '../styles/Certificados.css'
// import gifDeveloper from '../assets/gifs/developer.webp'
import frontenddev from '../../../public/assets/certifiOp/frontenddev.png'
import ManejoState from '../../../public/assets/certifiOp/reactmanejoproestado.png'
import PatronesReact from '../../../public/assets/certifiOp/reactpatrorendercompo.png'
import ReactPractico from '../../../public/assets/certifiOp/reactpractico.png'
import Image from 'next/image'
export function Certificados () {
  return (
    <>
      <section className='profile-main-certificados'>
        <div className='grid-container'>
          <div>
            {/* Cambiar el gif */}
            <h3>🎓Certificados📜</h3>
          </div>
          <div className='certificados-main-container'>
            <article className='certificados-container'>
              {/* <!-- TODO:agregar una imagen --> */}
              <div className='certificado-foto'>
                <Image priority className='' src={frontenddev} alt='asincronismo js' />

              </div>
              <h4 className='certificados-titulo'>Curso de Fronted Developer</h4>
            </article>
            <article className='certificados-container'>
              {/* <!-- TODO:agregar una imagen --> */}
              <div className='certificado-foto'>
                <Image priority className='' src={ManejoState} alt='Manejo Profesional del estado' />

              </div>
              <h4 className='certificados-titulo'>Curso de React.JS: Manejo Profesional del estado</h4>
            </article>
            <article className='certificados-container'>
              {/* <!-- TODO:agregar una imagen --> */}
              <div className='certificado-foto'>
                <Image priority className='' src={PatronesReact} alt='Patrones React' />
              </div>
              <h4 className='certificados-titulo'>Curso de React.JS: Patrones de render y componsición</h4>
            </article>
            <article className='certificados-container'>
              {/* <!-- TODO:agregar una imagen --> */}
              <div className='certificado-foto'>
                <Image priority className='' src={ReactPractico} alt='React Practico' />
              </div>
              <h4 className='certificados-titulo'>Curso Práctico de React.JS</h4>
            </article>
          </div>
          <div className='certificados-container-link'>
            <a className='certificados-link' href='https://platzi.com/p/daniel.avila/' target='_blank' alt='Mis certificados en Platzi' rel='noreferrer'>Ver todos mis certificados↗</a>
          </div>
        </div>
      </section>
    </>
  )
}
