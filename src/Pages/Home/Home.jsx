import React from 'react'
import '../Home/Home.css'

const Home = () => {


  return(
    <>
      <div className='home-container'>
        <div className='greeting-msg'>
          <h1>Greetings, I'm <span className='name'>Peter Tran.</span></h1>
          <div className='title-container'>
          <h1>I'm a <i>mechanical engineer </i> turned <span className='strike'>software engineer.</span> </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home