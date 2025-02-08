import React, { useState, useEffect } from "react";
import "./Resume.css";

import islamiaIcon from '../assets/images/Islamia.png';
import alAmeenIcon from '../assets/images/AlAmeen.png';
import polyIcon from '../assets/images/Poly.png';
import engineeringIcon from '../assets/images/Engineering.png';
import ten40Icon from '../assets/images/Ten40.jpg';
import WebGrukulIcon from '../assets/images/WebGrukul.png';

const Resume = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const resumeSection = document.getElementById("resume");
    
            if (!resumeSection) return;
    
            const rect = resumeSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
            setShowSidebar(isVisible);
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    return (
        <section id="resume" className="resume-section">
            
            {showSidebar && (
                <div className="resume-sidebar">
                    <ul>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </div>
            )}

           
            <div className="resume-content">
                <div id="education" className="resume-section-item">
                    <h2>Education</h2>
                    <div className="education-list">
                        <div className="education-item animate-skill">
                            <img src={islamiaIcon} alt="School Logo" className="education-icon" />
                            <div className="education-details">
                                <h3>Islamia High School</h3>
                                <p className="course-name">10th Standard</p>
                                <p className="duration">Completed in: 2014</p>
                            </div>
                        </div>
                        <div className="education-item">
                            <img src={alAmeenIcon} alt="School Logo" className="education-icon" />
                            <div className="education-details">
                                <h3>Al-Ameen English School & Junior College</h3>
                                <p className="course-name">12th Standard (Science)</p>
                                <p className="duration">Completed in: 2016</p>
                            </div>
                        </div>
                        <div className="education-item">
                            <img src={polyIcon} alt="School Logo" className="education-icon" />
                            <div className="education-details">
                                <h3>Anjuman Polytechnic Sadar Nagpur</h3>
                                <p className="course-name">Diploma in Computer Science</p>
                                <p className="duration">2018 - 2020</p>
                            </div>
                        </div>
                        <div className="education-item">
                            <img src={engineeringIcon} alt="School Logo" className="education-icon" />
                            <div className="education-details">
                                <h3>Anjuman college of Engineering and Technology</h3>
                                <p className="course-name">Bachelor of Computer Science & Engineering</p>
                                <p className="duration">2020 - 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="experience" className="resume-section-item">
                    <h2>Experience</h2>
                    <div className="experience-list">
                        <div className="experience-item">
                            <img src={ten40Icon} alt="Company Logo" className="education-icon" />
                            <div className="experience-details">
                                <h3>Ten40 Infotech</h3>
                                <p className="role">Internship (Web Development)</p>
                                <p className="duration">Migrated VB.net to Java Servlet architecture</p>
                            </div>
                        </div>
                        <div className="experience-item">
                            <img src={WebGrukulIcon} alt="Company Logo" className="education-icon" />
                            <div className="experience-details">
                                <h3>Webgurukul</h3>
                                <p className="role">MERN Stack Course</p>
                                <p className="duration">Built ReactJS website with API integration</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="skills" className="resume-section-item">
                    <div className="skills-container">
                        <h2 className="skills-title">Skills</h2>
                        <div className="skills-content">
                            <div className="skills-category">
                                <h3>Languages</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
                                    <li>JavaScript</li>
                                    <li>ReactJS</li>
                                    <li>SQL</li>
                                    <li>C#</li>
                                </ul>
                            </div>
                            <div className="skills-category">
                                <h3>Tools</h3>
                                <ul>
                                    <li>Git</li>
                                    <li>PostgreSQL</li>
                                    <li>Unity</li>
                                    <li>Blender</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
