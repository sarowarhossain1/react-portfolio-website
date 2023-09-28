import React from 'react'
import './about.css'
import MY from '../../assets/my.jpg'

const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>
     <div className="container about_container">
       <div className="about_me">
         <div className="about_me-image">
           <img src={MY}  alt="About Image" />
         </div>
       </div>
       <div className="about_content">
        <div className="about_cards">
         <article className='about_card'>
           <h2 className='about_title'><span>Front End</span> Develo<span>per</span> | <span>MERN-sTACK</span> Developer</h2>
          <p className='about_content'>
            I am Md.Sarowar Hossain Nayem, and I live in Rajshahi.I am Studied Computer Science And Engineering(CSE) at The Rajshahi Science & Technology University.I am a <span>React Developer</span> i Web Developing is My Passion.That Why i Explore With React Development Technology.
           </p>
           <div className='About_info'>
             <div className='about_info-title'>
                <h5> Name:<span className='name_title'> Md.Sarowar Hossain Nayem</span></h5>
                <h5>Phone:<span className='name_title'>++01612648699</span></h5>
                <h5>Address: <span className='name_title'>Rajshahi,Bangladesh</span> </h5>
             </div>
             <div className='about_info-title'>
               <h5> Birth Date: <span className='name_title'>10 August 1996</span></h5>
               <h5>Experience: <span className='name_title'>2 Year + learning Experience</span></h5>
               <h5>Email: <span  className='name_title'>mdnayem357878@gmail.com</span></h5>
             </div>
           </div>
         </article>
        </div>
 
        <a href="#contact" className='btn'> Hire Me</a>
       </div>
     </div>
 
    </section>
  )
}

export default About