import { Link } from "react-router-dom"
import "./Navbar.css"
import React from 'react'
import {FaBars} from "react-icons/fa"

export default function Navbar() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars size ={20} style={{color:"white"}}/>
      </div>
    </div>
  )
}
