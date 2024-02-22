import { Link } from "react-router-dom"
import "./Navbar.css"
import React from 'react'

export default function Navbar() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul>
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
    </div>
  )
}
