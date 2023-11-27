import { Header } from '../components/Header'
// import Contact from '../components/Contact'
// import { Footer } from './components/Footer'

import '../styles/globals.css'

export default function Home ({ children }) {
  return (
    <>
      <Header />
      <main>
        <h1>Falta El Footer Carnal</h1>
        {children}
      </main>

    </>
  )
}
