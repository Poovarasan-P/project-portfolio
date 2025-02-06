import React from 'react'
import "./Styles.css";
import profile from "../assets/image.png";
const Home = () => {
  return (
    <div>
     <div className="content">
      <div className="hero">
        <h1 className="hero-title">
          Hey there! I'm<br />
          <span className="highlight">Abdul Rahman.</span>
        </h1>
        <p className="hero-subtitle">
          <span>Software Engineer.</span> A self-taught developer with an<br />
          interest in Computer Science.
        </p>
        <p className="hero-text">
          🚀 Currently specializing in Frontend (React / Next.js)<br/>⚡ Frontend Engineer at <span>GGL</span>
        </p>
      
        
        <div className="social-links">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-box">
        <i className="fa-brands fa-github"></i>
        <p>Github</p>
      </a>
      
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-box">
        <i className="fa-brands fa-linkedin"></i>
        <p>LinkedIn</p>
      </a>

      <a href="mailto:contact@example.com" className="social-box">
        <i className="fa-solid fa-envelope"></i>
        <p>Email</p>
      </a>
       </div>
     </div>

      <div className="about">
        <h2 className="about-title">⚡ About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hey! I'm Abdul Rahman, I've been close to a computer since an early age, and been passionate about it ever since.
            </p>
            <p>
              I really liked to build stuff using <span>no-code tools</span> back in 2010, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked in a <span>Recruitment Company</span> and <span>a SaaS Company.</span>
              I'm interested in building something awesome with code and automate tasks with code, currently focused on <span>Web & Mobile Development, Open Source</span> and <span>Competitive Programming.</span>
            </p>
            <p>
              When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball! 🏀
            </p>
          </div>
          <div className="about-image">
            <img
              src={profile}
              alt="Abdul Rahman"
            />
          </div>
        </div>
      </div>
    </div>
 
    </div>
  )
}

export default Home
