// import { Header } from './components/Header'
// import { Yo } from './components/Yo'
// import { Projects } from './components/Projects'
// // import Contact from '../components/Contact'
// import { Footer } from './components/Footer'
// import { Certificados } from './components/Certificados'
import Head from './head'
import './styles/globals.css'
// import Script from 'next/script'

export default function RootLayout ({ children }) { // creamos el element
  return (
    <html lang='en'>
      <Head />
      {/* // eslint-disable-next-line react/jsx-no-undef */}
      <script type='module' src='https://cdn.jsdelivr.net/npm/ldrs/dist/auto/infinity.js' async />
      <body>
        {children}
      </body>

    </html>
  )
}
