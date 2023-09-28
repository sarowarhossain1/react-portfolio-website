import React from 'react'
import './header.css'
import { Typewriter } from 'react-simple-typewriter'
import ME from '../../assets/me.png'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
    <div className="container header_container">
     <p className='home_subtitle text-cs'>
      Hello, <span>My Name Is</span>
     </p>
     <h1 className='home_title text-cs'>
      Md.Sarowar Hossain <span>Nayem</span>
     </h1>
      i am
       <p className='home_job'>
          <Typewriter
            words={['Front End Developer', 'React Developer', 'MERN-sTACK Developer',]}
            loop={50}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
       </p>
       <CTA/>
       <HeaderSocial/>

       <div className="me" >
         <img src={ME} alt="me" />
       </div>
    

      <a href="#contact" className='scroll_down'> Scroll Down </a>
    </div>
    
  </header>
  )
}

export default Header