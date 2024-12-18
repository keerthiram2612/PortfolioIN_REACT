import React from 'react'
import src1 from "../assets/image1.png"
import  "./Projectpage.css"
import src2 from "../assets/image.png"
export default function ProjectPage() {
  return (
    <div>
      <div className="project-page">
        <div className="container">
        <div className="para">
            <h2>Grocery WebApp</h2>
            </div>
            <div className="row1">
                <img src={src1} /><br />
                <a href="https://grocery-webapp-lyart.vercel.app/"><button>View</button></a>
            </div>
        </div>
        <div className="container">
        <div className="para">
            <h2>GitHubProfile Finder</h2>
            </div>
            <div className="row1">
                <img src={src2} /><br />
                <a href=""><button>View</button></a>
            </div>
        </div>
      </div>
    </div>
  )
}
