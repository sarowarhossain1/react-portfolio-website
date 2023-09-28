import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineProject} from 'react-icons/ai'
import {MdContactMail} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome className='menu-icon'/> </a>
    <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser className='menu-icon'/>  </a>
    <a href="#mySkill" onClick={() => setActiveNav('#mySkill')}  className={activeNav === '#mySkill' ? 'active' : ''}><GiSkills className='menu-icon'/> </a>
    <a href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} > <AiOutlineProject className='menu-icon'/>  </a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} > <MdContactMail className='menu-icon'/></a>
   </nav>
  )
}

export default Nav