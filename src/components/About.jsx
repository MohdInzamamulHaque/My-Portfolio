import React from 'react';
import './About.css';
import developerImage from '../assets/images/dev.png';

import reactIcon from '../assets/images/React.png';
import htmlIcon from '../assets/images/HTML.png';
import csslIcon from '../assets/images/CSS.png';
import jsIcon from '../assets/images/JS.png';
import sqlIcon from '../assets/images/SQL.png';

const About = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="container">
        <div className="row d-flex no-gutters">
          {/* Left Section - Image */}
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="img-about d-flex align-items-stretch">
              <img 
                src={developerImage} 
                alt="Developer" 
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right Section - About Info */}
          <div className="col-md-6 col-lg-6 pl-md-5 py-5">
            <div className="about-info">
              <h2 className="mb-4 bold-text">About Me</h2>
              <p className='faded-text'>
              I am a React Developer with a passion for building responsive and efficient web applications. I love turning complex ideas into simple and user-friendly solutions. With a strong foundation in front-end development, I focus on creating seamless user experiences, writing clean and maintainable code, and staying up to date with the latest industry trends. I thrive on problem-solving and enjoy collaborating on innovative projects that push the boundaries of web development.
              </p>

              <ul className="about-details mt-4">
                <li><span className='bold-text'>Name:</span> <span className='faded-text'>Mohd Inzamam</span></li>
                <li><span className='bold-text'>Date of birth:</span> <span className='faded-text'>July 20, 1998</span></li>
                <li><span className='bold-text'>Address:</span> <span className='faded-text'>Rahimi Nursing Home, Mominpura, Nagpur, Maharashtra, India</span></li>
                <li><span className='bold-text'>Zip code:</span> <span className='faded-text'>440018</span></li>
                <li><span className='bold-text'>Email:</span> <span className='faded-text'>Inzemam700@gmail.com</span></li>
                <li><span className='bold-text'>Phone:</span> <span className='faded-text'>+91 8530597063</span></li>
              </ul>

              <div className="counter-wrap">
                <div className="text">
                  <p><a href="https://drive.google.com/file/d/1tx_-BWMFJj3PmITysq-QlvM5fQWKt2pj/view?usp=sharing" target="_blank" className="btn btn-primary">Download Resume</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Software Skills */}
<div className="software-skills">
  <h3>Software Skills</h3>
  <div className="skills-icons">
    <div className="skill">
      <img src={htmlIcon} alt="HTML" />
      <h4>HTML</h4>
    </div>
    <div className="skill">
      <img src={csslIcon} alt="CSS" />
      <h4>CSS</h4>
    </div>
    <div className="skill">
      <img src={jsIcon} alt="JavaScript" />
      <h4>JavaScript</h4>
    </div>
    <div className="skill">
      <img src={sqlIcon} alt="SQL" />
      <h4>SQL</h4>
    </div>
    <div className="skill">
      <img src={reactIcon} alt="React" />
      <h4>React</h4>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;
