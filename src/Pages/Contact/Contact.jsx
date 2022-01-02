import React from 'react'
import ContactForm from './ContactForm'

import '../Contact/Contact.css'

const Contact = () => {

  return(
    <>
        <div className='contact-container'>
          <div className='greeting-msg'>
            <h1>Contact</h1>
            <p>Get in touch!</p>
            <ContactForm />
          </div>
          </div>
    </>
  )
}


export default Contact