import "./HeroImageStyle.css"
import IntroImg from "../assets/intro-bg.jpg"
import React from 'react'
import { Link } from "react-router-dom"

export default function HeroImg() {
  const handleClick=()=>{
    window.location.href="https://github.com/keerthiram2612?tab=repositories"
  }
  return (
    <div className="hero">
       <div className="mask">
        <img className="intro-img" src = {IntroImg} alt = "IntroImg"/>
       </div>
       <div className="content">
        <p>HI , I'M KEERTHANA RAJARAM.</p>
        <h1>FRONT-END DEVELOPER</h1>
        <div>
            <Link  onClick={handleClick} to = "/project" className="btn">Projects</Link>
            <Link   to = "/contact" className="btn">Contact</Link>
        </div>
       </div>
    </div>
  )
}
