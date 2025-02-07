import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=inzeman700@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaEnvelope /></a>
        <a href="https://github.com/MohdInzamamulHaque" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/mohd-inzamam-ul-haque-24b287195/" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaLinkedin /></a>
      </div>
      <p className="footer-text">Made By: Mohd Inzamam</p>
    </footer>
  );
};

export default Footer;
