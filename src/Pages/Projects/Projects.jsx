import React from 'react'
import blackJack from '../../Assets/Blackjack.png'
import chefskiss from '../../Assets/ChefsKiss.png'
import jotdown from '../../Assets/Jotdown.png'
import allthefeels from '../../Assets/Allthefeels.png'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiDjango } from 'react-icons/di'
import { FaNodeJs, FaPython,FaBootstrap } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiReact, SiPostgresql, SiExpress } from 'react-icons/si'
import '../Projects/Projects.css'

const Projects = () => {

  return(
    <>
        <div className='projects-container'>
          <div className='project-msg'>
            <h1>Projects</h1>
            <p>Checkout what i've made!</p>
          </div>
          <div className='projects-wrapper'>
            <div className='project-card'>
              <img src={blackJack} alt="blackjack screen shot"/>
              <div className='description'>
                <h2>Casual BlackJack</h2>
                <p>BlackJack game that features DOM manipulation and light/dark mode.</p>
                <div className='technologies'>
                  <SiJavascript /> <AiFillHtml5 />  <DiCss3 /> <FaBootstrap />
                </div>
              </div>
                <div className='project-links'>
                  <a href="https://letsplayjsblackjack.netlify.app/" target='_blank' rel="noreferrer"><button>Site Link</button></a>
                  <a href="https://github.com/PPT87/BlackJack" target='_blank' rel="noreferrer"><button>GitHub Link</button></a>
                </div>
            </div>
            <div className='project-card'>
              <img src={chefskiss} alt="Chef's Kiss screen shot"/>
              <div className='description'>
                <h2>Chef's Kiss</h2>
                <p>Full CRUD food rating and review app. Requires Google Oauth to use.</p>
                <div className='technologies'>
                  <SiMongodb /> <SiExpress />  <FaNodeJs />
                </div>
              </div>
              <div className='project-links'>
                  <a href="https://chefs-kiss-app.herokuapp.com/" target='_blank' rel="noreferrer"><button>Site Link</button></a>
                  <a href="https://github.com/PPT87/Chefs-Kiss-Food-Review" target='_blank' rel="noreferrer"><button>GitHub Link</button></a>
                </div>
            </div>
            <div className='project-card'>
              <img src={jotdown} alt="JotDown screen shot"/>
              <div className='description'>
                <h2>JotDown</h2>
                <p>Todo app to quickly write down tasks or build a list. Requires login to use.</p>
                <div className='technologies'>
                  <FaPython /> <DiDjango />  <SiPostgresql /> <FaBootstrap />
                </div>
              </div>
              <div className='project-links'>
                  <a href="https://jotdowntodoapp.herokuapp.com/" target='_blank' rel="noreferrer"><button>Site Link</button></a>
                  <a href="https://github.com/PPT87/jot_down" target='_blank' rel="noreferrer"><button>GitHub Link</button></a>
                </div>
            </div>
            <div className='project-card'>
              <img src={allthefeels} alt="AllTheFeels screen shot"/>
              <div className='description'>
                <h2>AllTheFeels</h2>
                <p>Targeting adolescent mental health by uploading art to express their feelings.</p>
                <div className='technologies'>
                  <SiMongodb /> <SiExpress />  <SiReact /> <FaNodeJs />
                </div>
              </div>
              <div className='project-links'>
                  <a href="https://allthefeelsapp.herokuapp.com/" target='_blank' rel="noreferrer"><button>Site Link</button></a>
                  <a href="https://github.com/PPT87/allTheFeels" target='_blank' rel="noreferrer"><button>GitHub Link</button></a>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}


export default Projects