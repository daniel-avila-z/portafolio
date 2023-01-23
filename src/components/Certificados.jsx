import React from 'react'
import '../styles/Projects.css'
import gifDeveloper from '../assets/gifs/developer.webp'

const Projects =()=> {
    return (
        <section className="profile-main-projects">
        <div className="grid-container">
            <div>
                <h3>Proyectos<span><img  className="profile-main-gif" src={gifDeveloper} alt=""/></span></h3>
            </div>
            <div className="projects-main-container">
                <article className="porject-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <h4>Título del Proyecto</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in quia provident tenetur officiis, pariatur voluptate laudantium laborum nihil tempora nostrum aperiam eligendi quibusdam! Totam aperiam possimus quia rem voluptatibus.</p>
                </article>
                <article className="porject-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <h4>Título del Proyecto</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in quia provident tenetur officiis, pariatur voluptate laudantium laborum nihil tempora nostrum aperiam eligendi quibusdam! Totam aperiam possimus quia rem voluptatibus.</p>
                </article>
                <article className="porject-container">
                    {/* <!-- TODO:agregar una imagen --> */}
                    <h4>Título del Proyecto</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in quia provident tenetur officiis, pariatur voluptate laudantium laborum nihil tempora nostrum aperiam eligendi quibusdam! Totam aperiam possimus quia rem voluptatibus.</p>
                </article>
            </div>
        </div>
    </section>
    )
}

export default Projects