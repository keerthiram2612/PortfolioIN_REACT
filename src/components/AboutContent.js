import React from 'react'
import "./AboutContentstyle.css"
import { Link } from 'react-router-dom'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaLaravel } from "react-icons/fa";

export default function AboutContent() {
  const skills = [
    { name: "React", icon: <FaReact size={30} style={{ color: "#61dafb" }} /> },
    { name: "JavaScript", icon: <FaJs size={30} style={{ color: "#f7df1e" }} /> },
    { name: "Laravel", icon: <FaLaravel size={30} style={{ color: "#ff2d20" }} /> },
    { name: "PHP", icon: <FaPhp size={30} style={{ color: "#777bb4" }} /> },
    { name: "SQL", icon: <FaDatabase size={30} style={{ color: "#00758f" }} /> },
    { name: "HTML5", icon: <FaHtml5 size={30} style={{ color: "#e34f26" }} /> },
    { name: "CSS3", icon: <FaCss3Alt size={30} style={{ color: "#1572b6" }} /> },
  ];

  return (
    <div className='about-container'>
      <div className='about-intro'>
        <div className='left'>
          <h1>Who Am I?</h1>
          <p>
            I am a passionate <strong>Web Developer</strong> specializing in building interactive, 
            responsive, and secure web applications. I enjoy combining modern front-end 
            frameworks like React with robust back-end systems to deliver exceptional digital experiences.
          </p>
          <Link to="/contact">
            <button className='btn'>Contact Me</button>
          </Link>
        </div>
        <div className='right'>
          <div className='img-container'>
            <div className='img-stack top'>
              <img src={React1} className="img" alt='React development workspace' />
            </div>
            <div className='img-stack bottom'>
              <img src={React2} className="img" alt='Code editor close up' />
            </div>
          </div>
        </div>
      </div>

      <div className='skills-section'>
        <h2 className='skills-heading'>My Tech Stack</h2>
        <p className='skills-sub'>Tools and technologies I use daily to build digital experiences</p>
        <div className='skills-grid'>
          {skills.map((skill, index) => (
            <div key={index} className='skill-card glass-card'>
              <div className='skill-icon'>{skill.icon}</div>
              <span className='skill-name'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
