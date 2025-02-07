import React, { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { 
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target ${isScrolled ? 'scrolled' : ''}`} id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home-section">Inzamam</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse text-end" id="ftco-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
            <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
            <li className="nav-item"><a href="#resume" className="nav-link"><span>Resume</span></a></li>
            <li className="nav-item"><a href="#projects" className="nav-link"><span>Projects</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
