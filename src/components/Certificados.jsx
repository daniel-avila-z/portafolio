import React from 'react'
import '../styles/Certificados.css'
import gifDeveloper from '../assets/gifs/developer.webp'
import asincrojs  from '../assets/certificados/asincronismojs.png'
import  basicjs  from '../assets/certificados/basicojs.png'
import  closuresscopejs  from '../assets/certificados/closuresscopejs.png'
import  ecmahistojs  from '../assets/certificados/ecmahistojs.png'
import  frontenddev  from '../assets/certificados/frontenddev.png'
import  gestinpm  from '../assets/certificados/gestinpm.png'
import  htmlycss  from '../assets/certificados/htmlycss.png'
import  introreact  from '../assets/certificados/introreact.png'
import  manipulaciondom  from '../assets/certificados/manipulaciondom.png'
import  maquetacss  from '../assets/certificados/maquetacss.png'
import  practicojs  from '../assets/certificados/practicojs.png'
import  reactmanejoproestado  from '../assets/certificados/reactmanejoproestado.png'
import  reactpatronrendercompo  from '../assets/certificados/reactpatrorendercompo.png'
import  reactpractico  from '../assets/certificados/reactpractico.png'
import  webpack  from '../assets/certificados/webpack.png'

import cssLetra from '../assets/icons/css-svg-letra.svg'


const Certificados = () => {
    return (
        <>
        <section className="profile-main-certificados">
        <div className="grid-container">
            <div>
                {/* Cambiar el gif */}
                <h3>Certificados</h3>
            </div>
            <div className="certificados-main-container">
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={practicojs} alt="asincronismo js" />
                    </div>
                </article>
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={reactmanejoproestado} alt="basico js" />
                    </div>
                </article>
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={reactpatronrendercompo} alt="closures & scope js" />
                    </div>
                </article>
                <article className="certificados-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='certificado-foto'>
                        <img className='' src={reactpractico} alt="closures & scope js" />
                    </div>
                </article>
            </div>
            <div className='certificados-container-link'>
                <a className='certificados-link' href='https://platzi.com/p/daniel.avila/' target='_blank' alt='Platzi'>Ver todos mis certificados</a>
            </div>
        </div>
    </section>
    </>
    )
}

export default Certificados