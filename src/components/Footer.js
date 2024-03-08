import { FaHome, FaPhone } from "react-icons/fa"
import "./FooterStyle.css"

import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={25} style={{color:"white",marginRight:"2rem"}}/>
            </div>
            <div>
                <p>72 A Ambedkar nagar.</p>
                <p>Chennai ,TamilNadu</p>
            </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>+91 6382819707</h4>
                
            </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
