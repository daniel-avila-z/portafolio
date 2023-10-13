/* eslint-disable react/jsx-no-comment-textnodes */
import '../styles/Projects.css'
import DevGif from '../../../public/assets/gifs/developer.webp'
import FakestoreApi from '../../../public/assets/proyectosOp/fakestore-apiPlatzi.png'
import NextjsPractice from '../../../public/assets/proyectosOp/nextjs-practica.png'
import RickMorty from '../../../public/assets/proyectosOp/rick&morty-api.png'
import TodoApp from '../../../public/assets/proyectosOp/todo-app-react00.png'
import Image from 'next/image'

export function Projects () {
  return (
    <>
      <section className='profile-main-projects'>
        <div className='grid-container'>
          <div className='profile-main-gif'>
            <h3>Proyectos
              <span>
                <Image className='profile-main-gif' src={DevGif} alt='gif' />
              </span>
            </h3>
          </div>
          <div className='comentario-container'>
            <h2 className='comentario'>//Cada vez que puedo los mejoro en código y visualmente😅</h2>
          </div>
          <div className='projects-main-container'>
            <article className='project-container'>
              <picture className='project-foto'>
                <Image src={FakestoreApi} alt='fakeStore' />
              </picture>
              <div className='text-project-container'>
                <h4 className='titulo-project'>Fake Store</h4>
                <div className='text-project'>
                  <span className='hechoCon'> React </span><span className='hechoCon'> NPM </span><span className='hechoCon'> Webpack </span><span className='hechoCon'> JS </span><span className='hechoCon'> HTML </span><span className='hechoCon'> CSS </span>
                </div>
                <div className='links-project-container'>
                  <p><a target='_blank' className='link-project' href='https://daniel-avila-z.github.io/curso-practico-react02/' rel='noreferrer'>Ver online↗</a></p>
                  <span>|</span>
                  <p><a target='_blank' className='link-project' href='https://github.com/daniel-avila-z/curso-practico-react02' rel='noreferrer'>Ver código↗</a></p>
                </div>
              </div>
            </article>
            <article className='project-container'>
              <div className='project-foto'>
                <Image src={NextjsPractice} alt='Practica de NextJS 13 con MiduDev' />
              </div>
              <div className='text-project-container'>
                <h4 className='titulo-project'>Practica de NextJS 13</h4>
                <div className='text-project'>
                  <span className='hechoCon'> NextJS 13 </span><span className='hechoCon'> React </span><span className='hechoCon'> NPM </span><span className='hechoCon'> Webpack </span><span className='hechoCon'> JS </span><span className='hechoCon'> HTML </span><span className='hechoCon'> CSS </span>
                </div>
                <div className='links-project-container'>
                  <p><a target='_blank' className='link-project' href='https://practice-next-app00-pna0b7215-daniel-avila-z.vercel.app/' rel='noreferrer'>Ver online↗</a></p>
                  <span>|</span>
                  <p><a target='_blank' className='link-project' href='https://github.com/daniel-avila-z/practice-next-app00' rel='noreferrer'>Ver código↗</a></p>
                </div>
              </div>
            </article>
            <article className='project-container'>
              <div className='project-foto'>
                <Image src={RickMorty} alt='Rick & Morty API' />
              </div>
              <div className='text-project-container'>
                <h4 className='titulo-project'>Rick & Morty API</h4>
                <div className='text-project'>
                  <span className='hechoCon'> JS </span><span className='hechoCon'> HTML </span><span className='hechoCon'> JS </span><span className='hechoCon'> Tailwind CSS </span><span className='hechoCon'> CSS </span>
                </div>
                <div className='links-project-container'>
                  <p><a target='_blank' className='link-project' href='https://daniel-avila-z.github.io/RickMorty-Api/' rel='noreferrer'>Ver online↗</a></p>
                  <span>|</span>
                  <p><a target='_blank' className='link-project' href='https://github.com/daniel-avila-z/RickMorty-Api' rel='noreferrer'>Ver código↗</a></p>
                </div>
              </div>
            </article>
            <article className='project-container'>
              <div className='project-foto'>
                <Image src={TodoApp} alt='Todo App' />
              </div>
              <div className='text-project-container'>
                <h4 className='titulo-project'>Todo App</h4>
                <div className='text-project'>
                  <span className='hechoCon'> React </span><span className='hechoCon'> NPM </span><span className='hechoCon'> Webpack </span><span className='hechoCon'> JS </span><span className='hechoCon'> HTML </span><span className='hechoCon'> CSS </span>
                </div>
                <div className='links-project-container'>
                  <p><a target='_blank' className='link-project' href='https://daniel-avila-z.github.io/curso-intro-react/' rel='noreferrer'>Ver online↗</a></p>
                  <span>|</span>
                  <p><a target='_blank' className='link-project' href='https://github.com/daniel-avila-z/curso-intro-react' rel='noreferrer'>Ver código↗</a></p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
