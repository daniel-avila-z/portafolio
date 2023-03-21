import {Header} from './components/Header'
import {Yo} from './components/Yo'
import {Projects} from './components/Projects'
// import Contact from '../components/Contact'
import {Footer} from './components/Footer'
import {Certificados} from './components/Certificados'
import './styles/globals.css'

export default function RootLayout ({ children }) { // creamos el element
  return (
    <html lang='en'>
      <head />
        <body>
          <Header />
          <main>
          <Yo />
          <Projects />
          <Certificados />
          {children}
          {/* <Contact/> */}
          <Footer />
        </main>
        </body>
        
    </html>
  )
}

