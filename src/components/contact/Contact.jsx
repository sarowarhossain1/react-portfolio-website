import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32031at', 'template_6qbicdo', form.current, 'GJp2Q8lZsM0VAwIjO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
    <h2>CONTACT WITH ME</h2>

    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineMail/>
          <h4>Email</h4>
          <h5>mdnayem357878@gmail.com</h5>
          <a href="mailto:mdnayem357878@gmail.com" target='blank'>Send a Message</a>
        </article>
        <article className="contact_option">
          <RiMessengerLine/>
          <h4>Messenger</h4>
          <h5>S H Nayem</h5>
          <a href="https://m.me/profile.php?id=100005909740007" target='blank'>Send a Message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp/>
          <h4>WhatsApp</h4>
          <h5>++01612648699</h5>
          <a href="https://api.whatsapp.com/send?phone++01612648699" target='blank'>Send a Message</a>
        </article>
      </div>
      <form  ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder=" Name" required />
          <input type="email" name="email" placeholder=' Email' required  />
          <textarea name="message"  rows="7" placeholder=" Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
    </div>
   </section>
  )
}

export default Contact