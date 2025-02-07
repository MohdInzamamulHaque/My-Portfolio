import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Project.css";

import youtubeSearchImage from '../assets/images/YoutubeSearch.jpg';
import firstSiteImage from '../assets/images/FirstSite.jpg';
import marathonSphereImage from '../assets/images/MarathonSphere.jpg';

const projects = [
    {
        title: "YouTube Search Page",
        description: "A single-page application that integrates with the YouTube API, allowing users to search for videos dynamically. Features a clean UI and real-time search results.",
        github: "https://mohdinzamamulhaque.github.io/my-youtube-video-search/",
        image: youtubeSearchImage,
      },
      {
        title: "First Dungeons & Dragons Site",
        description: "My very first website created during my internship! A simple yet exciting project that introduces the world of Dungeons & Dragons with engaging content and design.",
        github: "https://mohdinzamamulhaque.github.io/MyFirst-D-D-Website/",
        image: firstSiteImage,
      },
      {
        title: "Marathon Sphere",
        description: "A fun and challenging 3D game where a sphere races down a track while avoiding obstacles. Built with Unity, featuring physics-based movement and increasing difficulty.",
        github: "https://drive.google.com/file/d/1EZ1S2AQw8WfvqGvlyrNZGd6-Yj0Bf02o/view?usp=sharing",
        image: marathonSphereImage,
      },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    View
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
