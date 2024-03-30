import React from 'react'
import Miracle from "../assets/miracle.jpg"

import "./HeroStyle.css";

export default function Certification() {
  return (
    <div className='work-container'>
      <h1 className='heading-c'>Certificates</h1>
      <div className='C-container'>
        <div className='C-card'>
          <img src = {Miracle}alt='image'/>
          <h2 className='c-title'>Certificate Title</h2>
      
        <div className='c-details'>
          <p>SHOOTING STAR FOUNDATION</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}
