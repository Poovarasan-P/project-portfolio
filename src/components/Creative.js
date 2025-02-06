

import  React from "react"
import { useEffect, useRef, useState } from "react"
import bodhi1 from "../assets/bodhi.PNG";
import bodhi2 from "../assets/bodhi2.PNG";
import bodhi3 from "../assets/bodhi4.PNG";
import "./CreativePage.css"

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "This project aims to provide a comprehensive roadmap for various programming fields, helping beginners navigate their learning journey.",
  },
  {
    id: "project-goals",
    title: "Project Goals",
    content:
      "Our main goal is to create a free, accessible platform that guides aspiring programmers through different areas of computer science and software development.",
  },
  {
    id: "tech-stack",
    title: "Tech Stack",
    content:
      "This project is built using modern web technologies including React for the frontend, Node.js for the backend, and MongoDB for data storage.",
  },
  {
    id: "features",
    title: "Features ✨",
    content:
      "Key features include interactive learning paths, progress tracking, and a community forum for discussion and support.",
  },
  {
    id: "computer-science",
    title: "Computer Science",
    content:
      "Our Computer Science section covers fundamental concepts like algorithms, data structures, and computer architecture.",
  },
  {
    id: "web-development",
    title: "Web Development",
    content:
      "The Web Development path includes both frontend and backend technologies, covering HTML, CSS, JavaScript, and popular frameworks.",
  },
  {
    id: "data-science",
    title: "Data Science",
    content: "Our Data Science curriculum includes statistics, machine learning, and data visualization techniques.",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    content:
      "Learn to build mobile apps for iOS and Android platforms using React Native and other cross-platform tools.",
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    content: "Sharpen your problem-solving skills with our competitive programming challenges and tutorials.",
  },
  {
    id: "game-development",
    title: "Game Development",
    content: "Explore game development concepts and tools, including Unity and Unreal Engine.",
  },
  {
    id: "challenges",
    title: "Challenges",
    content:
      "Creating a comprehensive learning platform comes with challenges like keeping content up-to-date and catering to diverse learning styles.",
  },
  {
    id: "learning-takeaways",
    title: "Learning and Takeaways",
    content:
      "Through this project, we've learned the importance of community feedback and iterative development in creating an effective learning platform.",
  },
  {
    id: "acknowledgements",
    title: "Acknowledgements",
    content:
      "We're grateful to our open-source contributors and the broader programming community for their support and valuable input.",
  },
]

const CreativePage = () => {
    const [activeSection, setActiveSection] = useState("");
    const sectionRefs = useRef({});
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 100;
        for (const section of sections) {
          const element = sectionRefs.current[section.id];
          if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToSection = (sectionId) => {
      setActiveSection(sectionId);
      const element = sectionRefs.current[sectionId];
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <div className="creative-page">
        
  
        <div className="div1">
          <div className="imgdiv"> 
            <img src={bodhi1} alt="bodhi" className="hero-image" />
            <img src={bodhi2} alt="bodhi" className="hero-image" /></div>
          
          <h1>Bodhi</h1>
          <p>Bodhi is a tutor-finding app designed to bridge the educational gap for rural students while providing tutors with flexible teaching opportunities and income generation.</p>
          <div className="stats-links">
            <span>1406 views -</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i> Github -
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-link"></i>Live Site
            </a>
          </div>
          <div>
          <img src={bodhi4} alt="bodhi" className="hero-image" />
          <p>Unleash your full learning potential with Bodhi,  where the
pursuit of knowledge meets effortless discovery. Say
goodbye to the search struggle and hello to tailored, top-
notch tutoring, right at your fingertips. Welcome to a 
smarter way to excel academically.</p>
         
          </div>
        </div>
        <hr/>
  
        <div className="content-wrapper">
          <div className="div2">
            {sections.map((section) => (
              <div key={section.id} ref={(el) => (sectionRefs.current[section.id] = el)} className={`section ${activeSection === section.id ? "active" : ""}`}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
  
          <div className="div3">
            <h3>Table of Contents</h3>
            <ul>
              {sections.map((section) => (
                <li key={section.id} className={activeSection === section.id ? "active" : ""} onClick={() => scrollToSection(section.id)}>
                  {section.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreativePage;