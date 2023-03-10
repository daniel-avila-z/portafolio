import React from 'react'
import '../styles/Certificados.css'
// import gifDeveloper from '../assets/gifs/developer.webp'
// import asincrojs  from '@certificados/asincronismojs.png'
// import  basicjs  from '@certificados/basicojs.png'
// import  closuresscopejs  from '@certificados/closuresscopejs.png'
// import  ecmahistojs  from '@certificados/ecmahistojs.png'
// import  frontenddev  from '@certificados/frontenddev.png'
// import  gestinpm  from '@certificados/gestinpm.png'
// import  htmlycss  from '@certificados/htmlycss.png'
// import  introreact  from '@certificados/introreact.png'
// import  manipulaciondom  from '@certificados/manipulaciondom.png'
// import  maquetacss  from '@certificados/maquetacss.png'
// import  webpack  from '@certificados/webpack.png'
// import cssLetra from '@icons/css-svg-letra.svg'
import  practicojs  from '../assets/certificados/practicojs.png'
import  reactmanejoproestado  from '../assets/certificados/reactmanejoproestado.png'
import  reactpatronrendercompo  from '../assets/certificados/reactpatrorendercompo.png'
import  reactpractico  from '../assets/certificados/reactpractico.png'
import PracticoJs from '../assets/certificados/PracticoJS'
import ManejoState from '../assets/certificados/ManejoState'
import PatronesReact from '../assets/certificados/PatronesReact'
import ReactPractico from '../assets/certificados/ReactPractico'

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
                        <img className=''src={`data:image/png;base64,${PracticoJs}`} alt="asincronismo js" />
                        
                    </div>
                    <p>Curso Práctico de JavaScript</p>
                </article>
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={`data:image/png;base64,${ManejoState}`} alt="basico js" />
                        
                    </div>
                    <p>Curso de React.JS: Manejo Profesional del estado</p>
                </article>
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={`data:image/png;base64,${PatronesReact}`} alt="closures & scope js" />
                    </div>
                    <p>Curso de React.JS: Patrones de render y componsición</p>
                </article>
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={`data:image/png;base64,${ReactPractico}`} alt="closures & scope js" />
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