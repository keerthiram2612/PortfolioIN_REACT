import React from "react";
import src1 from "../assets/image1.png";
import src2 from "../assets/image2.png";
import src3 from "../assets/image3.png";
import src4 from "../assets/image.png";
import "./Projectpage.css";

export default function ProjectPage() {
  const projects = [
    {
      title: "Grocery WebApp",
      image: src1,
      link: "https://github.com/keerthiram2612/Grocery-Webapp-NM",
      demo: "https://grocery-webapp-lyart.vercel.app/",
      tags: ["React", "CSS3", "Web App"],
    },
    {
      title: "GitHub Profile Finder",
      image: src2,
      link: "https://github.com/keerthiram2612/GithubProfile_finder",
      demo: "https://github-profile-finder.vercel.app/",
      tags: ["React", "API Integration", "JSON"],
    },
    {
      title: "NLP to SQL Conversion",
      image: src3,
      link: "https://github.com/keerthiram2612/NLP--to-SQL-Conversion",
      demo: "https://nlp-to-sql-conversion.vercel.app/",
      tags: ["Python", "SQL", "NLP", "AI Model"],
    },
    {
      title: "E-Learning Website",
      image: src4,
      link: "https://github.com/keerthiram2612/Spark-Academy-website",
      demo: "https://spark-academy-website.vercel.app/",
      tags: ["HTML5", "CSS3", "JavaScript"],
    },
  ];

  return (
    <div className="project-page">
      <h1 className="title gradient-text">My Projects</h1>
      <p className="project-sub">A showcase of some of my developmental works</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card glass-card" key={index}>
            <div className="project-img-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>
            <h2>{project.title}</h2>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span className="project-tag" key={tagIndex}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="buttons">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-github">GitHub</button>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-light">Live Demo</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

