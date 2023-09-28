import React from 'react'
import './services.css'
import LAPTOP from '../../assets/laptop.png'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section id='services'>
    <h2>MY SERVICE</h2>
    <motion.div 
    layout
    animate={{opacity:1, scale:1}}
          initial= {{opacity:0.8, scale:0.6}}
          exit={{opacity:0.4, scale:0.6}}
    className='container services_container'>
      <article className='service'>
       <div className='service_head'>
       <div className="service_img">
       <img src={LAPTOP} alt="" />
    </div>
         <h3 className='service_text'><span>Front End</span> Development</h3>
       </div>
       <div className='service_list'>
         <p>Before you start designing, take some time to think about what you want your website to achieve. Then you will benefit from hiring me</p>
       </div>
      </article>
      <article className='service'>
       <div className='service_head'>
       <div className="service_img">
       <img src={LAPTOP} alt="" />
    </div>
         <h3 className='service_text'><span>MERN Stack</span> Development</h3>
       </div>
       <div className='service_list'>
         <p>These three main technologies are used to build websites. Second, you need to be able to use these technologies to create functional and attractive websites for users.</p>
       </div>
      </article>
      <article className='service'>
       <div className='service_head'>
       <div className="service_img">
       <img src={LAPTOP} alt="" />
    </div>
         <h3 className='service_text'><span>React js</span> Development</h3>
       </div>
       <div className='service_list'>
         <p>React JS is a JavaScript library for creating user interfaces. This allows you to create reusable components that make your code easier to read and maintain.</p>
       </div>
      </article>
    </motion.div>
 </section>
  )
}

export default Services