import { FaMailBulk, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./FooterStyle.css"
import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h2 className="footer-logo gradient-text">Keerthana Rajaram</h2>
        <p className="footer-tagline">Web Developer • Creating modern digital experiences</p>
        
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/certificate">Certificates</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="footer-contact">
          <a href="mailto:keerthiram2612@gmail.com" className="email-chip">
            <FaMailBulk size={16} />
            <span>keerthiram2612@gmail.com</span>
          </a>
        </div>

        <div className="social">
          <a href="https://www.linkedin.com/in/keerthana-rajaram-66aa33242/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/keerthana_rajaram/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com/keerthiram2612" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
        </div>

        <p className="copyright">© {new Date().getFullYear()} Keerthana Rajaram. All rights reserved.</p>
      </div>
    </div>
  )
}


