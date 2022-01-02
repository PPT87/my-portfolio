import React from 'react'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import '../TopArrow/TopArrow.css'

const TopArrow = ({ showArrow, setShowArrow }) => {
  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", toggleVisibility);


  return(
    <>
      <div className='scrollTop'>
      {showArrow &&
        <button onClick={scrollToTop}><MdOutlineDoubleArrow /></button>
      }
      </div>
    </>
  )
}

export default TopArrow