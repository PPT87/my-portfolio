import React from 'react'
import { Link } from 'react-scroll'
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs' 
import { BiHomeAlt } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { GiSkills } from 'react-icons/gi'
import { RiContactsBookLine } from 'react-icons/ri'
import { AiOutlineFileDone } from 'react-icons/ai'
import { IoDocumentTextSharp } from 'react-icons/io5'
import resume from '../../Assets/Peter_Tran_Resume.pdf'
import '../Navbar/Navbar.css'


const Navbar = ({ showNav, setShowNav, handleNavCollapse }) => {

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
          <li><Link to='home' smooth={true} onClick={handleNavCollapse}><BiHomeAlt />Home</Link></li>
          <li><Link to='about' smooth={true} onClick={handleNavCollapse}><CgProfile />About Me</Link></li>
          <li><Link to='skills' smooth={true} onClick={handleNavCollapse}><GiSkills />Skills</Link></li>
          <li><Link to='projects' smooth={true} onClick={handleNavCollapse}><AiOutlineFileDone />Projects</Link></li>
          <li><a href={resume} download onClick={handleNavCollapse}><IoDocumentTextSharp />Resume</a></li>
          <li><Link to='contact' smooth={true} onClick={handleNavCollapse}><RiContactsBookLine />Contact</Link></li>
        </ul>
    </nav>
    </>
  )
}


export default Navbar