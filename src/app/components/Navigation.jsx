// import Link from 'next/link'
import Link from 'next/link'
import '../styles/Header.css'

export default function Navigation () {
  return (
    <nav>
      <section className='profile-link-left'>
        <Link href='/blog/FrioOCalor'>
          Último Post
        </Link>
        <Link href='/blog'>
          Blog
        </Link>
      </section>
      <section className='profile-link-right'>
        <a href='perfil.html'>Más sobre mí</a>
      </section>
    </nav>
  )
}

/* <div className='comentario-container'>
        <h2 className='comentario'></h2>
</div> */
