import React from "react";
import '../style/About.css';

function About() {
  return (
    <div className="container mt-5 about-page"> {/* mt-5 adds some margin at the top */}
      <div className="row">
        {/* Image column */}
        <div className="col-md-4">
          <p className="prototype-text"> prototype v0.1 </p>
          <img src={process.env.REACT_APP_PORTFOLIO_ABOUT_IMAGE} alt="Profile" className="img-fluid" />
        </div>
        {/* About Text*/}
        <div className="col-md-8">
          <h2 className="about-title">About Me</h2>
          <div className="about-me-text">
          <p>Hello, my name is Joshua Andrew Santillan and I like turtles</p>
          <p>🐢</p>
          <p>Hello! I'm Joshua Andrew, a UC San Diego Computer Science graduate fueled by curiosity and innovation with a goal to excel in the dynamic tech industry. With a solid academic foundation and hands-on experience in cutting-edge research projects, I am eager to start my career journey, contributing to the growth of technology and development.

            At UC San Diego, I was given the opportunity to tackle innovative research projects such as optimizing geographically distributed workloads and exploring the ever-growing realm of cloud data migration. The collection and analysis of power-grid data have contributed to more sustainable and eco-friendly data center operations across the globe. Working with technology for a carbon-aware system that efficiently deploys jobs geographically required us to use technologies such as Docker, Kubernetes, MQTT, RESTful API, and the National Research Platform (NRP).

            I am excited to join a company where I can continue to grow, acquire new skills, and contribute to a rapidly evolving industry. I am itching to jump on the train of cutting-edge technology and development, making a lasting impact on my career path. If you're looking for a highly motivated, curious, and eager-to-learn individual, I am the perfect candidate to join your team.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
