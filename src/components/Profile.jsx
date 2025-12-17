import profilePic from "../assets/WhatsApp Image 2025-08-21 at 15.04.58_581b9870.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import cv from "../assets/Akash.pdf";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="Aakash Vangada" />
      </div>

      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Aakash Vangada</h1>
        <p className="section__text__p2">Software Engineer</p>
        <p className="tagline">Turning Ideas into Code, and Code into Impact</p>

        <div className="btn-container">
          <a href={cv} className="btn btn-color-2" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-color-1">
            Contact Info
          </a>
        </div>

        <div id="socials-container">
          <img
            src={linkedin}
            className="icon"
            alt="LinkedIn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/aakashvangada", "_blank")
            }
          />
          <img
            src={github}
            className="icon"
            alt="GitHub"
            onClick={() =>
              window.open("https://github.com/vangadaakash", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
