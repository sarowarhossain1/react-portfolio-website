import React from 'react'
import {FaDownload} from 'react-icons/fa'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="#contact" className='btn '> HIRE ME </a>
        <a href={CV} download className='btn '> <FaDownload className='resume_icon'/> Download CV</a>
    </div>
  )
}

export default CTA