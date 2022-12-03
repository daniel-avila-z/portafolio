import React from 'react'
import Header from '../components/Header'
import Yo from '../components/Yo'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App = () => { // creamos el element

  return (
    <>
      <Header/>
      <main>
        <Yo/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>

    </>
  )
}

export default App // exportamos