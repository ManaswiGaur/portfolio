import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {MdOutlineBusinessCenter} from 'react-icons/md'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
const [active, setActive] = useState("home")
  return (
    <nav>
      <a href="#home" className={active==="home"?"active":""} onClick={()=>{setActive("home")}}><AiOutlineHome/></a>
      <a href="#about" className={active==="active"?"active":""} onClick={()=>{setActive("active")}}><AiOutlineUser/></a>
      <a href="#experience" className={active==="experience"?"active":""} onClick={()=>{setActive("experience")}}><BiBook/></a>
      <a href="#portfolio" className={active==="portfolio"?"active":""} onClick={()=>{setActive("portfolio")}}><MdOutlineBusinessCenter/></a>
      <a href="#contact" className={active==="contact"?"active":""} onClick={()=>{setActive("contact")}}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav