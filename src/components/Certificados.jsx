import React from 'react'
import '@styles/Certificados.css'
// import gifDeveloper from '../assets/gifs/developer.webp'
import  frontenddev  from '@certifiOp/frontenddev.png'
import ManejoState from '@certifiOp/reactmanejoproestado.png'
import PatronesReact from '@certifiOp/reactpatrorendercompo.png'
import ReactPractico from '@certifiOp/reactpractico.png'

const Certificados = () => {
    return (
        <>
        <section className="profile-main-certificados">
        <div className="grid-container">
            <div>
                {/* Cambiar el gif */}
                <h3>🎓Certificados📜</h3>
            </div>
            <div className="certificados-main-container">
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className=''src={frontenddev} alt="asincronismo js" />
                        
                    </div>
                    <p>Curso de Fronted Developer</p>
                </article>
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={ManejoState} alt="Manejo Profesional del estado" />
                        
                    </div>
                    <p>Curso de React.JS: Manejo Profesional del estado</p>
                </article>
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={PatronesReact} alt="Patrones React" />
                    </div>
                    <p>Curso de React.JS: Patrones de render y componsición</p>
                </article>
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={ReactPractico} alt="React Practico" />
                    </div>
                    <p>Curso Práctico de React.JS</p>
                </article>
            </div>
            <div className='certificados-container-link'>
                <a className='certificados-link' href='https://platzi.com/p/daniel.avila/' target='_blank' alt='Platzi'>Ver todos mis certificados↗</a>
            </div>
        </div>
    </section>
    </>
    )
}

export default Certificados