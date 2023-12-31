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
          <span className="accent-1"><span className="accent-2">J</span>oshua <span className="accent-2">S</span>antillan</span>
          {/* Social Medias */}
          <SocialMediaNav />
        </div>
        {/* About Text*/}
        <div className="col-lg-8 col-md-6 col-sm-12">
          <h2 className="about-title title-color">About Me</h2>
          <div className="about-me-text">
            <p>Hi! I'm <span className="accent-3">Joshua Andrew</span></p>

            <p>I am currently <span className="accent-3">located in San Diego;</span> I studied at UC San Diego and earned my Computer Science and Engineering degree in 2023.</p>

            <p>I first <span className="accent-3">became interested in computers in 2001</span> when I was exposed to RuneScape Online; being immersed in a virtual-fantasy world where I was able to cast spells, slay dragons, and meet new people was exhilarating. From an early age, I've been an avid web surfer and gamer who finds himself researching various topics and chatting with strangers around the world. <span className="accent-3">It's been interesting to watch the web transition</span> from the static web pages of Web 1.0, into to the rise of social media and shared content in Web 2.0, and now heading into a modern, more intelligent Web 3.0.</p>

            <p><span className="accent-3">How the internet connects us together is what ignited my curiosity in Computer Science</span>. I was inclined to know how data was encrypted and then sent over the wire and how to create secure systems that could talk to each other. My <span className="accent-3">interests in Computer Science</span> are in the scope of <span className="accent-3">Distributed Systems, Virtualization & Offensive Security</span>. With an education and research focused in systems and networking, I was able to explore the world of distributed systems through container orchestration and deploying jobs geographically based on a set of unique paramaters.</p>

            <p> Outside of programming <span className="accent-3">I enjoy playing video games such as Terraria, World of Warcraft and CS:GO.</span> I love being surrounded by nature; pretending that technology hasn't been invented yet, grabbing some boba (aka <span className="accent-3">taro milk tea</span> with <u>no</u> boba),
              listening to trance music, and making memes. Fun fact: <span className="accent-3">I like turtles</span> 🐢.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
