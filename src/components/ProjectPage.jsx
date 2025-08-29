import React from "react";
import src1 from "../assets/image1.png";
import src2 from "../assets/image2.png";
import src3 from "../assets/image3.png";
import src4 from "../assets/image.png";
import "./Projectpage.css";

export default function ProjectPage() {
  // ✅ Array of projects for easy scalability
  const projects = [
    {
      title: "Grocery WebApp",
      image: src1,
      link: "https://github.com/keerthiram2612/Grocery-Webapp-NM",
      demo: "https://grocery-webapp-lyart.vercel.app/",
    },
    {
      title: "GitHub Profile Finder",
      image: src2,
      link: "https://github.com/keerthiram2612/GithubProfile_finder",
      demo: "https://github-profile-finder.vercel.app/",
    },
    {
      title: "NLP to SQL Query Conversion",
      image: src3,
      link: "https://github.com/keerthiram2612/NLP--to-SQL-Conversion",
      demo: "https://nlp-to-sql-conversion.vercel.app/",
    },
    {
      title: "E-Learning Website",
      image: src4,
      link: "https://github.com/keerthiram2612/Spark-Academy-website",
      demo: "https://spark-academy-website.vercel.app/",
    },
  ];

  return (
    <div className="project-page">
      <h1 className="title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <h2>{project.title}</h2>
            <div className="buttons">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="btn github-btn">GitHub</button>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn demo-btn">Live Demo</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
