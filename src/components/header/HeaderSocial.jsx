import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub,FaFacebook} from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className='header_social'>
    <a href="https://www.facebook.com/profile.php?id=100005909740007 " target='blank'> <FaFacebook/></a>
   <a href="https://github.com/"  target='blank'> <FaGithub/></a>
   <a href="https://linkedin.com" target='blank' >  <BsLinkedin/> </a>
   </div>
  )
}

export default HeaderSocial