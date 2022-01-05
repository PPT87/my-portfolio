import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills'
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact'
import TopArrow from './Components/TopArrow/TopArrow';


const  App = () => {
  const [showNav, setShowNav] = useState(false)
  const [showArrow, setShowArrow] = useState(false) 

  const handleNavCollapse = () => showNav? setShowNav(!showNav) : false

  return (
    <>
      <Navbar showNav={showNav} setShowNav={setShowNav} handleNavCollapse={handleNavCollapse}/>

      <div onClick={handleNavCollapse}>

        <section id='home'>
          <Home />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='skills'>
          <Skills />
        </section>

        <section id='projects'>
          <Projects />
        </section>

        <section id='contact'>
          <Contact />
        </section>
      </div>
      <TopArrow showArrow={showArrow} setShowArrow={setShowArrow}/>
    </>
  );
}

export default App;
