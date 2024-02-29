import "./HeroImageStyle.css"
import IntroImg from "../assets/intro-bg.jpg"
import React from 'react'
import { Link } from "react-router-dom"

export default function HeroImg() {
  return (
    <div className="hero">
       <div className="mask">
        <img className="intro-img" src = {IntroImg} alt = "IntroImg"/>
       </div>
       <div className="content">
        <p>HI , I'M A FRONTEND DEVELOPER.</p>
        <h1>REACT DEVELOPER</h1>
        <div>
            <Link to = "/project" className="btn">Projects</Link>
            <Link to = "/contact" className="btn">Contact</Link>
        </div>
       </div>
    </div>
  )
}
