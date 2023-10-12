import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img3.png'
import IMG2 from '../../assets/img4.png'

const Portfolio = () => {
  return (
    <section  id='portfolio'>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
     <article className='portfolio_item'>
       <div className="portfolio_item-image">
         <img src={IMG1} alt="" />
       </div>
       <h3>MERN Stack Project</h3>
       <div className='portfolio_item-cta'>
       <a href="https://github.com/sarowarhossain1/b712-summer-camp-client2-side-sarowarhossain1" className='btn' target='blank'> Client site</a>
       <a href="https://github.com/sarowarhossain1/b7a12-summer-camp-server_side2-sarowarhossain1" className='btn' target='blank'> Server site</a>
       <a href="https://summer-camp-c1d6c.web.app/" className='btn btn-primary' target='blank'> Live Site</a>
       </div>
     </article>
     <article className='portfolio_item'>
       <div className="portfolio_item-image">
         <img src={IMG2} alt="" />
       </div>
       <h3>MERN Stack Project</h3>
       <div className='portfolio_item-cta'>
       <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-sarowarhossain1" className='btn' target='blank'> Client site</a>
       <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-sarowarhossain1" className='btn' target='blank'> Server site</a>
       <a href="https://toy-marketplace-7639c.web.app/" className='btn btn-primary' target='blank'> Live Site</a>
       </div>
     </article>
     <article className='portfolio_item'>
       <div className="portfolio_item-image">
         <img src={IMG1} alt="" />
       </div>
       <h3>This is a Portfolio item title</h3>
      <div className='portfolio_item-cta'>
       <a href="" className='btn' target='blank'> Client site</a>
       <a href="" className='btn' target='blank'> Server site</a>
       <a href="https://sarowarhossain1.github.io/b6-house/" className='btn btn-primary' target='blank'> Live Site</a>
      </div>
     </article>
     <article className='portfolio_item'>
       <div className="portfolio_item-image">
         <img src={IMG1} alt="" />
       </div>
       <h3>This is a Portfolio item title</h3>
       <div className='portfolio_item-cta'>
       <a href="" className='btn' target='blank'> Client site</a>
       <a href="" className='btn' target='blank'> Server site</a>
       <a href="" className='btn btn-primary' target='blank'> Live Site</a>
       </div>
     </article>
     <article className='portfolio_item'>
       <div className="portfolio_item-image">
         <img src={IMG1} alt="" />
       </div>
       <h3>This is a Portfolio item title</h3>
       <div className='portfolio_item-cta'>
       <a href="" className='btn' target='blank'> Client site</a>
       <a href="" className='btn' target='blank'> Server site</a>
       <a href="" className='btn btn-primary' target='blank'> Live Site</a>
       </div>
     </article>
    </div>
  </section>
  )
}

export default Portfolio