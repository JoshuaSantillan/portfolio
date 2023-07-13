import React from "react";
import '../style/About.css';
import SocialMediaNav from "../components/SocialMediaNav/SocialMediaNav";

function About() {
  return (
    <div className="container mt-5 about-page text-white">
      <div className="row">
        {/* Image and social icons column */}
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center">
          <img src={process.env.REACT_APP_PORTFOLIO_ABOUT_IMAGE} alt="Profile" className="profile-image img-fluid rounded" />
          <p className="prototype-text"> prototype v1.0 </p>
          {/* Social Medias */}
          <SocialMediaNav />
        </div>
        {/* About Text*/}
        <div className="col-lg-8 col-md-6 col-sm-12">
          <h2 className="about-title">About Me</h2>
          <div className="about-me-text">
            <p>Hello, my name is Joshua Andrew Santillan and I like turtles 🐢</p>
            <p></p>
            <p>I am 27 years old currently located in San Diego. I obtained my computer science and engineering degree from UC San Diego in 2023.
            </p>
            <p>
            I first became interested in computers in 2001 when I was exposed to RuneScape Online. From an early age, I've been an avid web surfer, researching various topics and chatting with strangers across the globe. I have been able to witness the transition from the static web pages of Web 1.0, to the rise of social media and shared content in Web 2.0, and the current ongoing transition into a modern, more intelligent Web 3.0. 
            </p>
            <p>When I'm not at my computer, well, then I must be sleeping.<br />
               Okay okay, when I'm not at my computer I am exploring nature pretending that technology hasn't been invented yet, grabbing a coffee/boba (taro milk tea),
               getting stuck in a musical trance, or fabricating never before seen memes (wait don't you have to be at your comptuter for that?)
          </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
