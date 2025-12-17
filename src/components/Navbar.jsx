import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav id="desktop-nav">
        <div className="logo">Aakash Vangada</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav id="hamburger-nav">
        <div className="logo">Aakash Vangada</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`menu-links ${open ? "open" : ""}`}>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
