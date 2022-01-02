import React from 'react'
import blackJack from '../../Images/Blackjack.png'
import chefskiss from '../../Images/ChefsKiss.png'
import jotdown from '../../Images/Jotdown.png'
import allthefeels from '../../Images/Allthefeels.png'
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
                <p>Looking to kill some time or can't get enough BlackJack?</p>
                <div className='technologies'>
                  <SiJavascript /> <AiFillHtml5 />  <DiCss3 /> <FaBootstrap />
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img src={chefskiss} alt="Chef's Kiss screen shot"/>
              <div className='description'>
                <h2>Chef's Kiss</h2>
                <p>Maybe that dish deserves a second chance...or not.</p>
                <div className='technologies'>
                  <SiMongodb /> <SiExpress />  <FaNodeJs />
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img src={jotdown} alt="JotDown screen shot"/>
              <div className='description'>
                <h2>JotDown</h2>
                <p>Never forget what you're thinking or need to do.</p>
                <div className='technologies'>
                  <FaPython /> <DiDjango />  <SiPostgresql /> <FaBootstrap />
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img src={allthefeels} alt="AllTheFeels screen shot"/>
              <div className='description'>
                <h2>AllTheFeels</h2>
                <p>Relax through art and share with the community.</p>
                <div className='technologies'>
                  <SiMongodb /> <SiExpress />  <SiReact /> <FaNodeJs />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}


export default Projects