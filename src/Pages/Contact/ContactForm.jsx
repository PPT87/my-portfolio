import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
// import { GrDocumentText } from 'react-icons/gr'
import '../Contact/Contact.css'


const ContactForm = () => {
  const gitHub = () => {
    window.open("https://github.com/PPT87/");
  };
  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/peter-p-tran/");
  };

  return(
    <>
    <div className='form-container'>
      <p>If you want to say 👋, start a 💬 or want to 👨🏻‍💻 something together, i'd love to hear from you! ❤️ </p>
      <form action="" method='POST'>
        <input type="text" className="name" name="name" placeholder="John Smith" />
        <input type="email" className="email" name="email" placeholder="john.smith@gmail.com" />
        <textarea className="subject" name="subject" placeholder="Peter, let's make something awesome!"></textarea>
        <input type="submit" value="Submit"></input>
      </form>
      <div className='contact-icons'>
        <button onClick={gitHub}><AiFillGithub /></button>
        <button onClick={linkedIn}><AiFillLinkedin /></button>
        {/* <button onClick=''><GrDocumentText /></button> */}
      </div>
    </div>
    </>
  )
}

export default ContactForm