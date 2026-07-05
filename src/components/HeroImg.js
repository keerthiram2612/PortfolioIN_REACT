import "./HeroImageStyle.css"
import IntroImg from "../assets/intro-bg.jpg"
import React from 'react'
import { Link } from "react-router-dom"

export default function HeroImg() {
  const handleClick = (e) => {
    e.preventDefault();
    window.open("https://github.com/keerthiram2612?tab=repositories", "_blank");
  }
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p className="intro-tag">HI, I'M KEERTHANA RAJARAM</p>
        <h1 className="hero-title gradient-text">Web Developer</h1>
        <p className="subtitle">I create responsive, modern & secure websites for my clients.</p>
        <div className="hero-buttons">
          <Link onClick={handleClick} to="/project" className="btn">Projects</Link>
          <a href="https://drive.google.com/file/d/1UGmHA-suEEDhyxVn7rNSRHaHdroAONX-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-light">Resume</a>
        </div>
      </div>
    </div>
  )
}

