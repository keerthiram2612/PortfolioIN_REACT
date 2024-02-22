import { Link } from "react-router-dom"
import "./Navbar.css"
import React from 'react'

export default function Navbar() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
    </div>
  )
}
