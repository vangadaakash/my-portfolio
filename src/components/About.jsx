import profilePic from "../assets/WhatsApp Image 2025-08-21 at 15.04.58_581b9870.jpg";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import arrow from "../assets/arrow.png";


function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>

      <div className="section-container">
        <div className="section__pic-container">
          <img src={profilePic} className="about-pic" alt="Profile" />
        </div>

        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} className="icon" alt="Experience" />
              <h3>Experience</h3>
              <p>Java Fullstack Intern</p>
            </div>

            <div className="details-container">
              <img src={education} className="icon" alt="Education" />
              <h3>Education</h3>
              <p>BTech CSE<br />Intermediate (MPC)</p>
            </div>
          </div>

          <div className="text-container">
            <p>
              I am Vangada Aakash, a Computer Science Engineer with hands-on experience in full-stack development.
I enjoy building scalable web applications using Java, Spring Boot, React, and the MERN stack.
Currently focused on strengthening backend development skills and creating real-world projects.

            </p>
          </div>
        </div>
      </div>

      <img
        src={arrow}
        className="icon arrow"
        alt="Arrow"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
}

export default About;
