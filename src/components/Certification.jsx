import React from 'react'
import Miracle from "../assets/miracle.jpg"
import Intern from "../assets/intern.jpg"
import KprHack from "../assets/kprcertificate.jpg"
import "./HeroStyle.css";

export default function Certification() {
  const certificates = [
    {
      title: "SHOOTING STAR FOUNDATION",
      image: Miracle,
      issuer: "Shooting Star Foundation",
    },
    {
      title: "CODSOFT TECHNOLOGY",
      image: Intern,
      issuer: "CodSoft Technology",
    },
    {
      title: "SOCIO-TECH HACKATHON",
      image: KprHack,
      issuer: "KPR Institute of Engineering & Technology",
    },
  ];

  return (
    <div className='certs-container'>
      <h1 className='heading-c gradient-text'>Certificates</h1>
      <p className='certs-sub'>Recognitions and technical milestones achieved</p>
      
      <div className='cert-grid'>
        {certificates.map((cert, index) => (
          <div className='cert-card glass-card' key={index}>
            <div className='cert-img-wrapper'>
              <img src={cert.image} alt={cert.title} className="cert-img" />
            </div>
            <div className='cert-details'>
              <h3>{cert.title}</h3>
              <p className='cert-issuer'>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

