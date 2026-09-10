
import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Server,
  ShieldCheck,
  X,
} from "lucide-react";

import "./styles.css";

const profile = {
  name: "Om Prakash Borse",
  email: "omborse771924@gmail.com",
  github: "https://github.com/omborse771924",
  linkedin: "https://www.linkedin.com/in/om-borse-21066928b/",
  discord: "https://discord.com/channels/@me",
  resume: "/Om-Prakash-Borse-Resume.pdf",
};

const projects = [
  {
    id: "01",
    name: "Rural Connect",
    category: "Full-Stack Platform",
    description:
      "A digital platform connecting rural communities with useful resources across education, healthcare, employment, agriculture, and government schemes.",
    technologies: [
      "React",
      "Vite",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "JWT",
    ],
    github:
      "https://github.com/omborse771924/Rural_Connect",
  },
  {
    id: "02",
    name: "ProjectVault",
    category: "Project Discovery Platform",
    description:
      "A centralized platform for discovering, searching, filtering, and exploring software projects based on technologies and categories.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    github:
      "https://github.com/omborse771924/ProjectVault",
  },
  {
    id: "03",
    name: "AegisGuard.AI",
    category: "Cybersecurity Platform",
    description:
      "A phishing URL and cyber-awareness platform that analyzes URLs and presents security-focused insights through a responsive interface.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Vercel",
    ],
    live: "https://aegisguard.vercel.app/",
  },
  {
    id: "04",
    name: "Alumni Management System",
    category: "Web Application",
    description:
      "A web application concept for managing alumni information and improving communication between an institution and its alumni community.",
    technologies: [
      "JavaScript",
      "Web Development",
      "Database",
    ],
    github:
      "https://github.com/omborse771924/Alumni_Management_System",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Responsive and accessible interfaces using React, JavaScript, HTML, CSS, and modern UI practices.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Backend services and REST APIs using Node.js, Express.js, Flask, authentication, and database integration.",
  },
  {
    icon: Database,
    title: "Data & Machine Learning",
    description:
      "Data analysis, exploratory data analysis, feature engineering, and machine learning workflows using Python.",
  },
  {
    icon: ShieldCheck,
    title: "Security-Focused Engineering",
    description:
      "Interest in cybersecurity, phishing detection, secure application design, and practical security awareness.",
  },
];

const skills = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "Flask",
  "REST APIs",
  "Python",
  "Java",
  "C++",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Git",
  "GitHub",
  "Azure",
  "Vercel",
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="navbar">
        <div className="nav-container">
          <button
            className="brand"
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
          >
            OM<span>.</span>
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About Me
            </button>

            <button onClick={() => scrollToSection("capabilities")}>
              Capabilities
            </button>

            <button onClick={() => scrollToSection("toolkit")}>
              Toolkit
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="menu-button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">
                FULL-STACK DEVELOPER
              </p>

              <h1>
                Building high-performance
                <span> digital experiences.</span>
              </h1>

              <p className="hero-description">
                I'm Om Prakash Borse, a developer focused on
                building full-stack applications, backend
                systems, data-driven solutions, and
                security-focused products.
              </p>

              <div className="hero-buttons">
                <button
                  className="button button-primary"
                  onClick={() => scrollToSection("projects")}
                >
                  Explore Work
                  <ArrowDown size={17} />
                </button>

                <button
                  className="button button-secondary"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in touch
                  <ArrowUpRight size={17} />
                </button>
              </div>

              <div className="hero-socials">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  GitHub
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} />
                  LinkedIn
                </a>

                <a
                  href={profile.discord}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} />
                  Discord
                </a>
              </div>
            </div>

            <div className="hero-image-area">
              <div className="image-glow" />

              <div className="portrait-frame">
  <img
    src="/images/profile.jpg"
    alt="Om Prakash Borse"
    className="portrait"
  />
</div>

              <div className="image-caption">
                <span>OM PRAKASH BORSE</span>
                <small>DEVELOPER · BUILDER</small>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-number">01</p>
              <p className="section-label">ABOUT ME</p>
            </div>

            <div className="about-grid">
              <h2>
                Turning ideas into
                <span> useful products.</span>
              </h2>

              <div className="about-content">
                <p className="large-text">
                  I enjoy creating practical digital solutions
                  that combine clean interfaces, reliable
                  backend systems, and meaningful user
                  experiences.
                </p>

                <p>
                  My work includes full-stack web applications,
                  Java and Python development, data analysis,
                  machine learning, and cybersecurity-focused
                  projects. I like learning through
                  experimentation and building projects that
                  solve real problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="section capabilities-section"
        >
          <div className="container">
            <div className="section-heading">
              <p className="section-number">02</p>
              <p className="section-label">CAPABILITIES</p>
            </div>

            <div className="capability-grid">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article
                    className="capability-card"
                    key={capability.title}
                  >
                    <div className="capability-icon">
                      <Icon size={24} />
                    </div>

                    <h3>{capability.title}</h3>

                    <p>{capability.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="toolkit" className="section skills-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-number">03</p>
              <p className="section-label">
                TECHNOLOGY TOOLKIT
              </p>
            </div>

            <div className="skills-wrapper">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-heading section-heading-between">
              <div>
                <p className="section-number">04</p>
                <p className="section-label">
                  FEATURED PROJECTS
                </p>
              </div>

              <p className="section-note">Selected work</p>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article
                  className="project-card"
                  key={project.id}
                >
                  <div className="project-number">
                    {project.id}
                  </div>

                  <div className="project-details">
                    <p className="project-category">
                      {project.category}
                    </p>

                    <h3>{project.name}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-technologies">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="project-open"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View ${project.name}`}
                  >
                    <ArrowUpRight size={23} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-card">
              <div className="contact-top">
                <p className="section-number">05</p>
                <p className="section-label">CONTACT ME</p>
              </div>

              <div className="contact-content">
                <div>
                  <p className="contact-kicker">
                    LET'S CONNECT
                  </p>

                  <h2>
                    Have an opportunity?
                    <span> Let's talk.</span>
                  </h2>
                </div>

                <div className="contact-text">
                  <p>
                    I am open to internships, developer
                    opportunities, collaborations, and
                    interesting software projects.
                  </p>

                  <p>
                    If you have an idea or opportunity worth
                    discussing, feel free to reach out.
                  </p>
                </div>
              </div>

              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={`mailto:${profile.email}`}
                >
                  Start a conversation
                  <Mail size={17} />
                </a>

                <a
                  className="button button-secondary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn
                  <Linkedin size={17} />
                </a>

                <a
                  className="button button-secondary"
                  href={profile.discord}
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord
                  <MessageCircle size={17} />
                </a>
              </div>

              <div className="contact-footer">
                <a href={`mailto:${profile.email}`}>
                  <Mail size={16} />
                  {profile.email}
                </a>

                <a
                  href={profile.resume}
                  download="Om-Prakash-Borse-Resume.pdf"
                >
                  Download Resume
                  <Download size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Om Prakash Borse</p>

          <p>React · Vite · Built with intention</p>

          <button onClick={() => scrollToSection("home")}>
            Back to top
            <ArrowUpRight size={15} />
          </button>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            <p className="project-category">
              {selectedProject.category}
            </p>

            <h2>{selectedProject.name}</h2>

            <p>{selectedProject.description}</p>

            <div className="project-technologies">
              {selectedProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="modal-actions">
              {selectedProject.github && (
                <a
                  className="button button-primary"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                  <Github size={17} />
                </a>
              )}

              {selectedProject.live && (
                <a
                  className="button button-primary"
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Live Demo
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);