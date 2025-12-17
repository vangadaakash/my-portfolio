import { useState } from "react";
import arrow from "../assets/arrow.png";
import aiFinance from "../assets/ai-finance-tracker.png";
import weather from "../assets/Screenshot 2025-08-21 164903.png";
import clock from "../assets/ChatGPT Image Aug 21, 2025, 05_03_19 PM.png";
import jarvis from "../assets/Screenshot 2025-08-21 170552.png";
import ecommerce from "../assets/ecommercestore.png";
import blog from "../assets/simpleblog.png";
import fishfeed from "../assets/fishfeed.png";
import fooddel from "../assets/fooddel.png";
import tailorcraft from "../assets/tailorcraft.png";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Food Delivery Website",
      img: fooddel,
      desc: "Full-stack MERN food delivery app with authentication, cart, and order management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/vangadaakash/food-del",
      live: "https://food-del-frontend-szd7.onrender.com",
      featured: true,
    },
    {
      title: "Fish Feed Web Application",
      img: fishfeed,
      desc: "Freelance React-based business website for managing fish feed products and customers.",
      tech: ["React", "CSS", "Business Logic"],
      github: "https://github.com/vangadaakash/fish-feeds",
      live: "https://www.populerrfishfeeds.com/",
    },
    {
      title: "AI Finance Tracker",
      img: aiFinance,
      desc: "Full-stack expense tracker with AI-powered insights and financial forecasting.",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      github: "https://github.com/vangadaakash/Ai-Finance-tracker",
      live: "https://ai-finance-tracker-hazel.vercel.app",
      featured: true,
    },
    {
      title: "Weather Forecast App",
      img: weather,
      desc: "Responsive weather application that displays real-time weather data using public APIs.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/vangadaakash/WeatherApp",
      live: "https://weatherappdetector.netlify.app/",
    },
    {
      title: "Digital Clock",
      img: clock,
      desc: "Real-time digital clock built using JavaScript with a clean and minimal interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vangadaakash/DigitalClock",
      live: "https://sampledigitalclock.netlify.app/",
    },
    {
      title: "Jarvis Chatbot",
      img: jarvis,
      desc: "AI-powered virtual assistant supporting voice commands and intelligent responses.",
      tech: ["JavaScript", "AI", "Speech API"],
      github: "https://github.com/vangadaakash/Jarvis-AI",
      live: "https://jarvisaiassistance.netlify.app/",
    },
    {
      title: "Ecommerce Store",
      img: ecommerce,
      desc: "Frontend e-commerce website with product listings, categories, and cart functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vangadaakash/Ecommerce",
      live: "https://samplee-shop.netlify.app/",
    },
    {
      title: "Simple Blog",
      img: blog,
      desc: "Lightweight blog website with clean layout and responsive content design.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/vangadaakash",
      live: "https://rightcomputers-blog.netlify.app/",
    },
    {
      title: "Tailor",
      img: tailorcraft,
      desc: "Professional tailoring website showcasing custom suits and blazer collections.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/vangadaakash/TailorCraft",
      live: "https://tailorcrafto.netlify.app/",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>

      <div className="experience-details-container">
        <div className="about-containers project-grid">

          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className={`details-container color-container project-card ${
                project.featured ? "featured-project" : ""
              }`}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.img}
                  className="project-img"
                  alt={project.title}
                />
                <div className="project-overlay">
                  <span>View Project →</span>
                </div>
              </div>

              <h2 className="experience-sub-title project-title">
                {project.title}
              </h2>

              <p className="project-desc">{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="btn-container project-btns">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}

        </div>

        {!showAll && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              className="btn btn-color-1"
              onClick={() => setShowAll(true)}
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>

      <img
        src={arrow}
        className="icon arrow"
        alt="arrow"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}

export default Projects;
