import React from 'react'
import Navbar  from './components/Navbar'
import Home from './components/Home'
import Feature  from './components/Feature'
import Bottomfeatur from './components/Bottomfeatur'
import Whychoose from './components/whyChoose'
import Destination from './components/Destination'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>  
      <Home/>
      <Feature/>
      <Bottomfeatur/>
      <Whychoose/>
      <Destination/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
