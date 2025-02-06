import React from 'react'
import "./Styles.css";
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
          Software Engineer. A self-taught developer with an<br />
          interest in Computer Science.
        </p>
        <p className="hero-text">
          🚀 Currently specializing in Frontend (React / Next.js)
        </p>
        <p className="hero-text">
          ⚡ Frontend Engineer at GGL
        </p>
        
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="social-link">
           {/*  <Github size={24} /> */}
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="social-link">
            {/* <Linkedin size={24} /> */}
          </a>
          <a href="mailto:contact@example.com"
             className="social-link">
           {/*  <Mail size={24} /> */}
          </a>
        </div>
      </div>

      <div className="about">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hey! I'm Abdul Rahman, I've been close to a computer since an early age, and been passionate about it ever since.
            </p>
            <p>
              I really liked to build stuff using no-code tools back in 2010, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked in a Recruitment Company and a SaaS Company.
            </p>
            <p>
              I'm interested in building something awesome with code and automate tasks with code, currently focused on Web & Mobile Development, Open Source and Competitive Programming.
            </p>
            <p>
              When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball! 🏀
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
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
