import React from 'react'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiDjango } from 'react-icons/di'
import { FaNodeJs, FaPython } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiReact, SiPostgresql, SiExpress} from 'react-icons/si'
import '../Skills/Skills.css'

const Skills = () => {

  return(
    <>
        <div className='skills-container'>
          <div className='greeting-msg'>
            <h1>Skills and Tools</h1>
            <p className='tech'>Technologies that i've used to make things happen.</p>
            <div className='icons-container'>
              <div className='top-container'>
                <div className='box-icon'>
                  <AiFillHtml5 className='html'/>
                  <p>HTML5</p>
                </div>
                <div className='box-icon'>
                  <DiCss3 className='css'/>
                  <p>CSS3</p>
                </div>
                <div className='box-icon'>
                  <SiJavascript className='javascript'/>
                  <p>JavaScript</p>
                </div>
                <div className='box-icon'>
                  <SiMongodb className='mongodb'/>
                  <p>MongoDB</p>
                </div>
              </div>
              <div className='bottom-container'>
                <div className='box-icon'>
                  <SiExpress className='express'/>
                  <p>Express</p>
                </div>
                <div className='box-icon'>
                  <SiReact className='react'/>
                  <p>React.js</p>
                </div>
                <div className='box-icon'>
                  <FaNodeJs className='node'/>
                  <p>Node.js</p>
                </div>
                <div className='box-icon'>
                  <FaPython className='python'/>
                  <p>Python</p>
                </div>
              </div>
              <div className='bottom-container'>
                <div className='box-icon'>
                    <DiDjango className='django'/>
                    <p>Django</p>
                </div>
                <div className='box-icon'>
                  <SiPostgresql className='postgres'/>
                  <p>PostgreSQL</p>
                </div>
                <div className='box-icon'>
                  <AiFillGithub className='github'/>
                  <p>GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}


export default Skills