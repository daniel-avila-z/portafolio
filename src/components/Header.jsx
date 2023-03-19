import React from 'react';
import '@styles/Header.css';
import gmail from '@icons/gmail-logo.png';
import linkedin from '@icons/linkedin-logo.png';
import telegram from '@icons/telegram-logo.png';
import whatsapp from '@icons/whatsapp-logo.png';
import github from '@icons/github.png';

const Header = () => {
    return (
      <header>
        <section className="header-icon-container">
          <div className="icons">
            <a href="">
              <span>
                <img
                  className="icon"
                  src={gmail}
                  alt="gmail"
                />
              </span>
            </a>
            <a href="">
              <span>
                <img
                  className="icon"
                  src={linkedin}
                  alt="linkedin"
                />
              </span>
            </a>
            <a href="">
              <span>
                <img
                  className="icon"
                  src={telegram}
                  alt="telegram"
                />
              </span>
            </a>
            <a href="">
              <span>
                <img
                  className="icon"
                  src={whatsapp}
                  alt="whatsapp"
                />
              </span>
            </a>
            <a href="">
              <span>
                <img className="icon" src={github} alt="github" />
              </span>
            </a>
          </div>
        </section>
        <nav>
          {/* <section className="profile-link-left">
            <a href="perfil.html">Ultimo Post</a>
            <a href="blogs.html">Blog</a>
          </section> */}
          <div className='comentario-container'>
            <h2 className='comentario'>//Zona en construción 👨‍💻</h2>
          </div>
          {/* <section className="profile-link-right">
            <a href="perfil.html">Más sobre mí</a>
          </section> */}
        </nav>
      </header>
    );
}

export default Header;