import React from 'react'
import { Link } from "react-router-dom";

import "./Styles.css";
import profile from "../assets/image.avif";


const Home = () => {
    const articles = [
        {
          title: "2024 Retrospective",
          date: "January 21 2025",
          readTime: "6 min read",
        },
        {
          title: "Unleash Your Dev Blog: Write More with GitHub Issues as Your CMS",
          date: "April 2 2024",
          readTime: "3 min read",
        },
        {
          title: "Code Faster with Vim Shortcuts!",
          date: "July 18 2022",
          readTime: "2 min read",
        },
        {
          title: "Easily Boost Your Productivity With Code Snippets",
          date: "September 22 2021",
          readTime: "3 min read",
        },
      ]
      const projects = [
        {
          title: "Bodhi  ",
          image: require("../assets/bodhi.png"), 
          description:
            "A web app to analyze whether an opinion on a specific topic is positive or negative based on recent tweets using Natural Language Processing.",
          tech: ["React", "Python", "Chart.js"],
          link: "/creative"
        },
       /*  {
          title: "creative@home",
          image: require("../assets/prayer.webp"), // Fix the image path
          description:
            "A website that provides roadmaps for various fields in programming and helps people learn to code for free.",
          tech: ["JavaScript", "Sass"],
          link: "/creative"
        }, */
      ];
      
  return (
    <div>
     <div className="content">
      <div className="hero">
        <h1 className="hero-title">
          Hey there! I'm<br />
          <span className="highlight">Hari Baskar.</span>
        </h1>
        <p className="hero-subtitle">
          <span>UX/UI Expert.</span>Thoughtful Design, Flawless <br />
          Execution.
        </p>
        <p className="hero-text">
          🚀 Designing intuitive digital experiences with a blend of <br/>⚡ creativity and precision, delivering projects that are both <br/> <span>beautiful and functional.</span>
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
    Hey! I'm <span>Hari Baskar</span>, a <span>UX/UI expert</span> who has always been passionate about creating seamless and intuitive digital experiences. From the start of my career, I've been driven by a love for <span>thoughtful design</span> and <span>flawless execution</span>. My focus is on blending <span>creativity</span> and <span>precision</span> to craft designs that are not only visually stunning but also highly functional.
  </p>
  <p>
    When I'm not immersed in design, I love exploring new trends in the <span>tech world</span> and pushing the boundaries of what can be achieved with design. Whether it's solving <span>user problems</span> or creating a <span>memorable experience</span>, I'm all about making <span>digital spaces</span> better.
  </p>
  <p>
    In my free time, I enjoy unwinding with <span>games</span>, watching a good <span>show</span>, or hitting the <span>basketball court</span> for a game with friends! 🏀
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

     

      {/*  */}

      <div className="portfolio-container">
  <h2 className="portfolio-title">All Creative<span>Works.</span></h2>
  <p className="portfolio-subtitle">
    Here are some of my projects that I have worked on.
  </p>
 
  <div className="portfolio-grid">
    {projects.map((project, index) => (
      <div
        key={index}
        className="portfolio-card"
        onClick={() => (window.location.href = project.link)}
      >
        <img
          src={project.image} // Render the image properly
          alt={project.title}
          className="portfolio-image"
        />
        <h3 className="portfolio-card-title">{project.title}</h3>
        <div className="portfolio-tech-stack">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="portfolio-tech">{tech}</span>
          ))}
        </div>
        <p className="portfolio-description">{project.description}</p>
      </div>
    ))}
  </div>
 
</div>

     {/* latest-article */}
     <div className="articles-container">
      <div className="articles-header">
        <h2 className="articles-title">📄 Latest Article.</h2>
        
      </div>

      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-meta">{article.date} • {article.readTime}</p>
          </div>
        ))}
      </div>
    </div>
 

      {/* contact-section */}
      <div className="contact-container">
      <h2 className="contact-title">Keep In Touch.</h2>
      <p className="contact-description">
        I'm currently specializing in{" "}
        <span className="highlight-contact">UI/UX Expert.</span> <br />
        Feel free to get in touch and talk more about your projects.
      </p>

      <div className="contact-buttons">
        <a href="#" className="contact-btn">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:example@email.com" className="contact-btn">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="" className="contact-btn">
          <i className="fas fa-file"></i> Resume
        </a>
      </div>

      <footer className="contact-footer">
        Designed and Developed by <span className="highlight-contact">Hari Baskar</span>.
        <br />
        Built with <span className="highlight-contact">Next.js</span> &{" "}
        <span className="highlight-contact">Chakra UI</span>. Hosted on{" "}
        <span className="highlight-contact">Vercel</span>.
      </footer>
    </div>

                                                                                                                                                                                   







    </div>
 
    </div>
  )
}

export default Home
