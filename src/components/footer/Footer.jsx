import React from 'react'
import './Footer.css'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#home" className='footer__logo'>Manaswi Gaur</a>

        <ul className="permalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="facebook.com"><FaFacebookF/></a>
          <a href="instagram.com"><AiOutlineInstagram/></a>
          <a href="twitter.com"><AiOutlineTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Manaswi Gaur, All Rights Reserved</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer