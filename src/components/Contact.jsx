import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";



function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>

      <div className="contact-grid">

        {/* Email */}
        <div className="contact-card">
          <img src={email} alt="email" className="contact-icon-lg" />
          <h3>Email</h3>
          <a href="mailto:vangadaakash529@gmail.com">
            vangadaakash529@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <img src={linkedin} alt="linkedin" className="contact-icon-lg" />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/aakashvangada"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <img src={github} alt="github" className="contact-icon-lg" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/vangadaakash"
            target="_blank"
            rel="noreferrer"
          >
            View Repositories
          </a>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <img
            src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/phone/default/48px.svg"
            alt="phone"
            className="contact-icon-lg"
          />
          <h3>Phone</h3>
          <a href="tel:+918341825612">+91 83418 25612</a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
