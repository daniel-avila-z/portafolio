import React from 'react'
import '../styles/Projects.css'
// import gifDeveloper from '../assets/gifs/developer.webp'
//import fakeStore from '../assets/proyectos/fakestore-apiPlatzi.png'
// import nextJSPract from '../assets/proyectos/nextjs-practica.png'
// import rickMorty from '../assets/proyectos/rick&morty-api.png'
// import todoApp from '../assets/proyectos/todo-app-react00.png'
import DevGif from '../assets/gifs/DevGif'
import FakestoreApi from '../assets/proyectos/FakestoreApi'
import NextjsPractice from '../assets/proyectos/NextJsPractice'
import RickMorty from '../assets/proyectos/Rick&Morty'
import TodoApp from '../assets/proyectos/TodoApp'

const Projects =()=> {
    return (<>
        <section className="profile-main-projects">
        <div className="grid-container">
            <div className='profile-main-gif'>
                <h3>Proyectos<span><img  className="profile-main-gif" src={`data:image/webp;base64,${DevGif}`} alt=""/></span></h3>
            </div>
            <div className='comentario-container'><h2 className='comentario'>//Cada vez que puedo los mejoro en código y visualmente😅</h2></div>
            <div className="projects-main-container">
                <article className="project-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='project-foto'>
                        <img src={`data:image/png;base64,${FakestoreApi}`}  alt="fakeStore" />
                    </div>
                    <h4 className='titulo-project'>Fake Store con la API de Platzi</h4>
                    <div className='text-project'><span className='hechoCon'> React </span><span className='hechoCon'> NPM </span><span className='hechoCon'> Webpack </span><span className='hechoCon'> JS </span><span className='hechoCon'> HTML </span><span className='hechoCon'> CSS </span></div>
                    <p><a target="_blank" className='link-project'  href='https://daniel-avila-z.github.io/curso-practico-react02/'>Ver online↗</a></p>
                </article>
                <article className="project-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='project-foto'>
                        <img src={`data:image/png;base64,${NextjsPractice}`} alt="Practica de NextJS 13 con MiduDev" />
                    </div>
                    <h4 className='titulo-project'>Practica de NextJS 13 con MiduDev</h4>
                    <div className='text-project'><span className='hechoCon'> NextJS 13 </span><span className='hechoCon'> React </span><span className='hechoCon'> NPM </span><span className='hechoCon'> Webpack </span><span className='hechoCon'> JS </span><span className='hechoCon'> HTML </span><span className='hechoCon'> CSS </span></div>
                    <p><a target="_blank" className='link-project' href='https://practice-next-app00-pna0b7215-daniel-avila-z.vercel.app/'>Ver online↗</a></p>
                </article>
                <article className="project-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='project-foto'>
                        <img src={`data:image/png;base64,${RickMorty}`} alt="Rick & Morty API" />
                    </div>
                    <h4 className='titulo-project'>Rick & Morty API</h4>
                    <div className='text-project'><span className='hechoCon'> JS </span><span className='hechoCon'> HTML </span><span className='hechoCon'> JS </span><span className='hechoCon'> Tailwind CSS </span><span className='hechoCon'> CSS </span></div>
                    <p><a target="_blank" className='link-project' href='https://daniel-avila-z.github.io/RickMorty-Api/'>Ver online↗</a></p>
                </article>
                <article className="project-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <div className='project-foto'>
                        <img src={`data:image/png;base64,${TodoApp}`} alt="Todo App" />
                    </div>
                    <h4 className='titulo-project'>Todo App del curso de React en Platzi</h4>
                    <div className='text-project'><span className='hechoCon'> React </span><span className='hechoCon'> NPM </span><span className='hechoCon'> Webpack </span><span className='hechoCon'> JS </span><span className='hechoCon'> HTML </span><span className='hechoCon'> CSS </span></div>
                    <p><a target="_blank" className='link-project' href='https://daniel-avila-z.github.io/curso-intro-react/'>Ver online↗</a></p>
                </article>
            </div>
        </div>
    </section>
   </>)
}

export default Projects
