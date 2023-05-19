import { Header } from './components/Header'
import { Yo } from './components/Yo'
import { Projects } from './components/Projects'
// import Contact from '../components/Contact'
import { Footer } from './components/Footer'
import { Certificados } from './components/Certificados'
import './styles/globals.css'

export default function Home ({ children }) {
  return (
    <>
      <Header />
      <main>
        <Yo />
        <Projects />
        <Certificados />
        {children}
        <Footer />
      </main>

    </>
  )
}
