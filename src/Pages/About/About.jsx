import React from 'react'
import '../About/About.css'

const About = () => {

  return(
    <>
        <div className='about-container'>
            <h1 className='about-header'>About</h1>
            <p className='who'>Who is Peter anyway?</p>
              <div className='picture-wrapper'></div>
                <div className='title'>
                  <h3>Software Engineer | Mechanical Engineer</h3>
                    <p>I am Full Stack Developer with Project Management experience. I have developed web applications using languages such as JavaScript and Python along with frameworks including Express.js and Django. </p> <br />
                    <p>When i'm not tinkering on projects, engaging on coding challenges or learning something new, you can find me tearing up the bowling alley's with my average score of 💯, on the 🏀 court chasing bricks or watching my new-found sport, ⛳️ 🏌🏼‍♂️. </p>
                </div>
        </div>
    </>
  )
}


export default About