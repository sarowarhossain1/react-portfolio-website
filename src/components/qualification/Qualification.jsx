import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section id='qualification_section'>
    <h2 className='section_title'>MY QUALIFICATION</h2>

    <div className='qualification_container container '>
       <div className='qualification_tabs'>
         <div className="qualification_button qualification_active button--flex">
            <i className="uil uil-graduation-cap     qualification_icon"></i> {" "}
             Education
         </div>
         
         <div className="qualification_button qualification_active  button--flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i> {" "}
            Courses
         </div>
       </div>

       <div className="qualification_sections">
        <div className="qualification_content">
         <div className="qualification_data">
            <div>
               <h3 className="qualification_title">BSC Engineering in CSE</h3>
               <span className="qualification_subtitle">Rajshahi Science & Technology University | 2022-Present</span>
               <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 
               </div>
            </div>

            <div>
               <span className="qualification_rounder"></span>
               <div className="qualification_line"></div>
            </div>
         </div>
         <div className="qualification_data">
            <div></div>
            <div>
               <span className="qualification_rounder"></span>
               <span className="qualification_line"></span>
            </div>
            <div>
               <h3 className="qualification_title">Complete Web Development</h3>
               <span className="qualification_subtitle">Programming Hero | 2023</span>
               <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 
               </div>
            </div>

           
         </div>
         <div className="qualification_data">
            <div>
               <h3 className="qualification_title">Diploma Engineering in computer Technology</h3>
               <span className="qualification_subtitle">Daffodil Polytechnic Institute | 2016-2020</span>
               <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 
               </div>
            </div>
            <div>
               <span className="qualification_rounder"></span>
               <div className="qualification_line"></div>
            </div>
         </div>
         
         <div className="qualification_data">
            <div>
               <h3 className="qualification_title">Secondary School Certificate</h3>
               <span className="qualification_subtitle">Rajshahi Adarsha High School | 2012-2014</span>
               <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 
               </div>
            </div>

            <div>
               <span className="qualification_rounder"></span>
               <div className="qualification_line"></div>
            </div>
         </div>
         <div className="qualification_data">
            <div></div>
            <div>
               <span className="qualification_rounder"></span>
               <span className="qualification_line"></span>
            </div>
            <div>
               <h3 className="qualification_title">Web Design</h3>
               <span className="qualification_subtitle">raj IT | 2022</span>
               <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 
               </div>
            </div>

           
         </div>


        </div>
       </div>
    </div>
    </section>
  )
}

export default Qualification