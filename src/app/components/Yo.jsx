import '../styles/Yo.css'
// import fotoPerfil from '../assets/img/perfil.jpg'
// import fotoPerfil from '../assets/img/foto1.jpg'
import FotoYo from '../../../public/assets/img/yo2.jpg'
import Image from 'next/image'
export function Yo () {
  return (
    <>
      <div className='profile-main-name'>
        <h1>¡Hola👋!, soy <span className='profile-name'>DANIEL AVILA</span></h1>
      </div>
      <section className='profile-main-container'>
        <div className='grid-container  profile-container'>

          <Image priority src={FotoYo} alt='mi-foto' />

          <div className='profile-main-text'>
            <h2 className='yo-h2'>Tengo conocimientos en el lado del frontend con tecnologías como <span className='resaltado'>React</span>, <span className='resaltado'>NextJS</span>  y <span className='resaltado'>Tailwind</span>, completando cursos y tutoriales, ambos con prácticas que me animan a seguir desarrollando.</h2>
            <h3 className='yo-h3'>Continuamente estoy aprendiendo tecnologías para crear productos que me gusten y en un futuro ayuden a personas.<br />
              <br />
              Actualmente estoy aprendiendo PHP para comenzar mi camino backend🤖.
            </h3>
          </div>
        </div>
      </section>

    </>
  )
}
