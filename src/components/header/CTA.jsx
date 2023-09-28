import React from 'react'
import {FaDownload} from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="#contact" className='btn '> HIRE ME </a>
        <a href="#contact" className='btn '> <FaDownload className='resume_icon'/> Download CV</a>
    </div>
  )
}

export default CTA