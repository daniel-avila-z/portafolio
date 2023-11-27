/* eslint-disable react/jsx-no-undef */
'use client'
import { useState } from 'react'
import '../styles/Yo.css'
import FotoYo from '../../../public/assets/img/yo2webp.webp'
import Image from 'next/image'
import Loading from '../loading'

export default function Yo () {
  // const imageLoader = () => {
  //   return (
  //     <l-infinity
  //       size='55'
  //       stroke='4'
  //       stroke-length='0.15'
  //       bg-opacity='0.1'
  //       speed='1.3'
  //       color='white'
  //     />
  //   )
  // }
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className='profile-main-name'>
        <h1>¡Hola👋!, soy <span className='profile-name'>DANIEL AVILA</span></h1>
      </div>
      <section className='profile-main-container'>
        <div className='grid-container  profile-container'>
          <div className='profile-foto-container'>
            {isLoading && (
              <Loading />
            )}
            {setIsLoading && (
              <Image
                src={FotoYo}
                alt='Imagen'
                onLoadingComplete={() => setIsLoading(!isLoading)}
              />
            )}

            {/* {isLoading && <Loading />
              <l-infinity
                size='55'
                stroke='4'
                stroke-length='0.15'
                bg-opacity='0.1'
                speed='1.3'
                color='white'
              />}
            {isLoading && <Image onLoadingComplete={handleImageLoad} src={FotoYo} alt='mi-foto' loader={imageLoader} />} */}
            {/* <Image loading='lazy' src={FotoYo} alt='mi-foto' /> */}
            <h4 className='profile-foto-info'>21 años</h4>
          </div>
          <div className='profile-main-text'>
            <h2 className='yo-h2'>Tengo conocimientos en el lado del frontend, así como tecnologías como <span className='resaltado'>React</span>, <span className='resaltado'>NextJS</span>  y <span className='resaltado'>Tailwind</span>. He completado cursos y tutoriales, los cuales me animan a seguir desarrollando.</h2>
            <h2 className='yo-h2'>Continuamente, estoy aprendiendo tecnologías para crear productos que me gustan y que en un futuro ayuden a las personas. Actualmente, estoy aprendiendo PHP para comenzar mi camino backend🤖.
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}
/* <div id='storyRoot' class='mx-auto container'>
        <iframe
          loading='lazy'
          title='Perseverance Rover Embed'
          data-src='https://mars.nasa.gov/gltf_embed/25042'
          width='100%'
          height='400'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen='allowfullscreen'
          src='https://mars.nasa.gov/gltf_embed/25042'
        />
      </div> */
