import React from 'react'
import Miracle from "../assets/miracle.jpg"
import Intern from "../assets/intern.jpg"
import KprHack from "../assets/kprcertificate.jpg"
import "./HeroStyle.css";

export default function Certification() {
  return (
    <div className='work-container'>
      <h1 className='heading-c'>Certificates</h1>
      <div className='C-container'>
        <div className='C-card'>
          <img src = {Miracle}alt='image'/>
        <div className='c-details'>
          <p>SHOOTING STAR FOUNDATION</p>
        </div>
        </div>
        <div className='C2-card'>
        <img src = {Intern}alt='image'/>
        <div className='c-details'>
          <p>CODSOFT TECHNOLOGY</p>
        </div>
        </div>
        <div className='C3-card'>
          <img src = {KprHack} alt='image'/>
          <div className='c-details'>
            <p>SOCIO-TECH HACKATHON</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
