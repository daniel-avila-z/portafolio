import React from "react";
import '../styles/Yo.css'
import fotoPerfil from '../assets/img/perfil.jpg'

const Yo = () => {
    return(
<>  <div className="profile-main-name">
        <h1>¡Hola!, soy <span className="profile-name">DANIEL AVILA</span></h1>
    </div>
    <section className="profile-main-container">
        <div className="grid-container  profile-container">
            <div>
                <img src={fotoPerfil} alt="" />
            </div>
            <div>
                <h2>Me desempeño en</h2>
                <p>.sxs</p>
            </div>
        </div>
    </section></>
    )
}

export default Yo