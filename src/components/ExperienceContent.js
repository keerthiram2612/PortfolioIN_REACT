import React from 'react'
import "./ExperienceContent.css"
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";

export default function ExperienceContent() {
  const experiences = [
    {
      role: "Web Developer",
      company: "Sri Hema Infotech",
      period: "Present",
      type: "Job",
      description: "Designing and developing robust, modern, and user-friendly web applications, resolving architectural challenges, and implementing full-stack solutions.",
      icon: <FaBriefcase size={22} style={{ color: "#a855f7" }} />,
      tags: ["PHP", "Laravel", "SQL", "HTML5", "CSS3", "JavaScript", "React"],
    },
    {
      role: "Web Development Intern",
      company: "Virtual Tech Services",
      period: "July 2024 - Aug 2024",
      type: "Internship",
      description: "Developed a dynamic GitHub profile finder web application utilizing ReactJS, integrating external GitHub APIs, and formatting visual data dynamically.",
      icon: <FaLaptopCode size={22} style={{ color: "#6366f1" }} />,
      tags: ["ReactJS", "API Integration", "JavaScript", "CSS3"],
    },
    {
      role: "Web Development Intern",
      company: "AV Square Technologies",
      period: "July 2024 - Aug 2024",
      type: "Internship",
      description: "Developed modern web application user interfaces, implementing clean layout designs and responsive properties using Bootstrap.",
      icon: <FaLaptopCode size={22} style={{ color: "#6366f1" }} />,
      tags: ["HTML5", "Bootstrap", "CSS3", "Responsive UI"],
    },
    {
      role: "Intern",
      company: "Prothious Engineering Services",
      period: "July 2023 - Aug 2023",
      type: "Internship",
      description: "Gained hands-on UI design skills, explored responsive structures, and gathered insights into hardware-software systems integration.",
      icon: <FaLaptopCode size={22} style={{ color: "#6366f1" }} />,
      tags: ["UI Skills", "Systems Integration", "Tech Design"],
    },
  ];

  return (
    <div className='exp-container'>
      <h1 className='exp-heading gradient-text'>Work Experience & Internships</h1>
      <p className='exp-sub'>My professional journey and industrial training background</p>

      <div className='timeline'>
        {experiences.map((exp, index) => (
          <div className='timeline-item' key={index}>
            <div className='timeline-badge-wrapper'>
              <div className='timeline-badge-circle'>
                {exp.icon}
              </div>
            </div>
            
            <div className='timeline-content-card glass-card'>
              <div className='timeline-header'>
                <div>
                  <h3 className='role-title'>{exp.role}</h3>
                  <h4 className='company-name'>
                    {exp.company}
                    <span className={`badge ${exp.type.toLowerCase()}`}>{exp.type}</span>
                  </h4>
                </div>
                <div className='period-tag'>{exp.period}</div>
              </div>
              
              <p className='role-desc'>{exp.description}</p>
              
              <div className='role-tags'>
                {exp.tags.map((tag, tagIndex) => (
                  <span className='role-tag' key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
