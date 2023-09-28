import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img4.png'
import IMG2 from '../../assets/img3.png'

const Portfolio = () => {
  return (
    <section  id='portfolio'>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
     <article className='portfolio_item'>
       <div className="portfolio_item-image">
         <img src={IMG1} alt="" />
       </div>
       <h3>This is a Portfolio item title</h3>
       <div className='portfolio_item-cta'>
       <a href="" className='btn' target='blank'> Client site</a>
       <a href="" className='btn' target='blank'> Servr site</a>
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
       <a href="" className='btn' target='blank'> Servr site</a>
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
       <a href="" className='btn' target='blank'> Servr site</a>
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
       <a href="" className='btn' target='blank'> Servr site</a>
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
       <a href="" className='btn' target='blank'> Servr site</a>
       <a href="" className='btn btn-primary' target='blank'> Live Site</a>
       </div>
     </article>
    </div>
  </section>
  )
}

export default Portfolio