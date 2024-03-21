import React from 'react'
import Miracle from "../assets/miracle.jpg"
import  "./HeroStyle.css"
import Intern from "../assets/intern.jpg"

export default function Certification() {
  
  return (
    <div className='hero'>
      <div className='miracle-div'>
        <span>
      <img className='miracle' src={Miracle} alt='miracle'/>
      </span>
      </div>
      <div className='intern-div'>
        <span>
      <img className='intern' src = {Intern} alt="intern"/>
      </span>
      </div>
     <div className='btn-container'>
      <button className='btn' id = "prev">Prev</button>
      <button className='btn' id = "next">Next</button>
     </div>
    </div>
  )
}
