import { FaHome, FaPhone ,FaMailBulk, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"
import "./FooterStyle.css"

import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={25} style={{color:"white",marginRight:"2rem"}}/>
                <p>72 A Ambedkar nagar,
                Chennai.</p>
                
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>+91 6382819707</h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>keerthiram2612@gmail.com</h4>
            </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>This is Keerthana FrontEnd developer .
            I enjoy discussing <br/>
            new projects and design 
            challenges. </p>
            <div className="social">
        <FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}}/>
        <FaInstagram size={30} style={{color:"white",marginRight:"1rem"}}/>
        </div>
        </div>
      </div>
    </div>
  )
}
