import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>manaswigaur04@gmail.com</h5>
            <a href="mailto:manaswigaur04@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>


          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>manaswi-gaur-480106212</h5>
            <a href="https://www.linkedin.com/in/manaswi-gaur-480106212/" target="_blank" rel="noreferrer">Send a Message</a>
          </article>


          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-9799010845</h5>
            <a href="https://api.whatsapp.com/send?phone=+919799010845" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email Address' required/>
          <textarea name="message" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact