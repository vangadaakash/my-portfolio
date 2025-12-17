import checkmark from "../assets/checkmark.png";
import arrow from "../assets/arrow.png";

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>

     {/* ===== WORK EXPERIENCE ===== */}
<div className="experience-details-container">
  <div className="details-container work-experience-container">
    <h2 className="experience-sub-title center">Work Experience</h2>

    <div className="work-grid">

      {/* Internship */}
      <div className="work-card">
        <img src={checkmark} className="icon" alt="check" />
        <h3>Java Fullstack Intern</h3>
        <h4>HMI Engineering Services</h4>
        <p>
          Worked on Java, Spring Boot, REST APIs, and frontend technologies
          to build and maintain scalable web applications.
        </p>
      </div>

      {/* Freelance */}
      <div className="work-card">
        <img src={checkmark} className="icon" alt="check" />
        <h3>Freelance Developer</h3>
        <h4>Fish Feed Web Application</h4>
        <p>
          Designed and developed a responsive web application for fish feed
          business management including product display and customer interaction.
        </p>
      </div>

    </div>
  </div>
</div>


      {/* ===== SKILLS SECTION ===== */}
      <div className="experience-details-container">
        <div className="about-containers">

          {/* Frontend */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {[
                ["HTML", "Experienced"],
                ["CSS", "Experienced"],
                ["JavaScript", "Basic"],
                ["Bootstrap", "Intermediate"],
              ].map(([skill, level]) => (
                <article key={skill}>
                  <img src={checkmark} className="icon" alt="check" />
                  <div>
                    <h3>{skill}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {[
                ["Java", "Intermediate"],
                ["Python", "Intermediate"],
                ["MySQL", "Intermediate"],
                ["Spring Boot", "Basic"],
                ["PHP", "Basic"],
                ["Git", "Intermediate"],
                ["Node.js", "Intermediate"],
                ["Express.js", "Intermediate"],
                ["MongoDB", "Intermediate"],
              ].map(([skill, level]) => (
                <article key={skill}>
                  <img src={checkmark} className="icon" alt="check" />
                  <div>
                    <h3>{skill}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>

      <img
        src={arrow}
        className="icon arrow"
        alt="arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}

export default Experience;
