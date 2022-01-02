import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoDocumentTextSharp } from 'react-icons/io5'
import resume from '../../Assets/Peter-Tran-Resume.pdf'
import emailjs from 'emailjs-com'
import '../Contact/Contact.css'


const ContactForm = () => {
  const gitHub = () => {
    window.open("https://github.com/PPT87/");
  };
  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/peter-p-tran/");
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_qkztnqb', 'template_wm4tzeb', e.target, 'user_MXiR9dhu2zZBmPRTzY3Io')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

  return(
    <>
    <div className='form-container'>
      <p>If you want to say 👋, start a 💬 or want to 👨🏻‍💻 something together, i'd love to hear from you! ❤️ </p>
      <form onSubmit={sendEmail}>
        <input type="text" className="name" name="name" placeholder="John Smith" />
        <input type="email" className="email" name="email" placeholder="john.smith@gmail.com" />
        <textarea className="message" name="message" placeholder="Peter, let's make something awesome!"></textarea>
        <input type="submit" value="Submit"></input>
      </form>
      <div className='contact-icons'>
        <button onClick={gitHub}><AiFillGithub /></button>
        <button onClick={linkedIn}><AiFillLinkedin /></button>
        <a href={resume} download ><IoDocumentTextSharp className='resume-icon'/></a>
      </div>
    </div>
    </>
  )
}

export default ContactForm