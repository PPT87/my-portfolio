import React from 'react'
import { Link } from 'react-scroll'
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs' 
import { BiHomeAlt } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { GiSkills } from 'react-icons/gi'
import { RiContactsBookLine } from 'react-icons/ri'
import { AiOutlineFileDone } from 'react-icons/ai'
import { IoDocumentTextSharp } from 'react-icons/io5'
import resume from '../../Assets/Peter-Tran-Resume.pdf'
import '../Navbar/Navbar.css'


const Navbar = ({ showNav, setShowNav }) => {

  return(
    <>
    <div className='open-wrapper'>
        <BsDoorOpen className='openBtn' onClick={() => setShowNav(!showNav)} />
    </div>
      <nav className={showNav ? 'nav-wrapper active' : 'nav-wrapper'}>
        <div className='close-wrapper'>
        <BsDoorClosed className='closeBtn' onClick={() => setShowNav(!showNav)} />
        </div>
        <ul className='link-wrapper'>
          <li><Link to='home' smooth={true} ><BiHomeAlt />Home</Link></li>
          <li><Link to='about' smooth={true} ><CgProfile />About Me</Link></li>
          <li><Link to='skills' smooth={true} ><GiSkills />Skills</Link></li>
          <li><Link to='projects' smooth={true} ><AiOutlineFileDone />Projects</Link></li>
          <li><a href={resume} download ><IoDocumentTextSharp />Resume</a></li>
          <li><Link to='contact' smooth={true} ><RiContactsBookLine />Contact</Link></li>
        </ul>
    </nav>
    </>
  )
}


export default Navbar