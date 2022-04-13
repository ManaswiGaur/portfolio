import React from 'react'
import './About.css'
// import aboutMe from "../../assets/me-about.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={aboutMe} alt="" /> */}
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Contacts</h5>
              <small>10+ Companies</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
          Hello, I am a professional programmer as well as a coder. I can develop full-stack websites, write a program, create an android app or game and many more. I have a good experience in Python, Javascript, C#, React, HTML, CSS etc.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About