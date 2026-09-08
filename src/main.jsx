import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, Award, BriefcaseBusiness, CheckCircle2, ChevronRight,
  Code2, Database, Download, ExternalLink, Github, GraduationCap, Linkedin,
  Mail, Menu, Moon, ShieldCheck, Sparkles, Sun, X, Zap
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Om Prakash Borse",
  email: "omborse771924@gmail.com",
  github: "https://github.com/omborse771924",
  linkedin: "https://www.linkedin.com/in/om-borse-21066928b/",
  leetcode: "https://leetcode.com/u/eHz2YPGGV4/",
  resume: "/Om-Prakash-Borse-Resume.pdf",
};

const projects = [
  {
    name: "Rural Connect",
    eyebrow: "01 · Full-Stack Platform",
    description:
      "A digital platform focused on connecting rural communities with useful services and opportunities across education, healthcare, employment, agriculture and government resources.",
    tech: ["React", "Vite", "Express", "PostgreSQL", "Supabase", "JWT"],
    github: "https://github.com/omborse771924/Rural_Connect",
    color: "lime",
    number: "01",
  },
  {
    name: "ProjectVault",
    eyebrow: "02 · Project Discovery",
    description:
      "A centralized project platform for discovering, searching, filtering and exploring software projects by technologies and categories.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/omborse771924/ProjectVault",
    color: "blue",
    number: "02",
  },
  {
    name: "AegisGuard.AI",
    eyebrow: "03 · Cybersecurity",
    description:
      "A phishing URL and cyber-awareness platform that analyzes URLs and presents security-focused insights through a responsive interface.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Vercel"],
    live: "https://aegisguard.vercel.app/",
    color: "violet",
    number: "03",
  },
  {
    name: "Alumni Management System",
    eyebrow: "04 · Web Application",
    description:
      "A web application concept for managing alumni information and strengthening communication between an institution and its alumni community.",
    tech: ["JavaScript", "Web", "Database"],
    github: "https://github.com/omborse771924/Alumni_Management_System",
    color: "amber",
    number: "04",
  },
];

const skills = [
  { title: "Frontend Engineering", icon: Code2, items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend & APIs", icon: BriefcaseBusiness, items: ["Node.js", "Express.js", "Flask", "REST APIs", "Authentication"] },
  { title: "Data & Machine Learning", icon: Sparkles, items: ["Python", "Pandas", "NumPy", "Scikit-learn", "EDA", "Feature Engineering"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "MySQL", "Firebase", "PostgreSQL", "SQL"] },
  { title: "Programming", icon: Code2, items: ["Java", "C++", "Python", "JavaScript", "SQL", "OOP"] },
  { title: "Security & Developer Tools", icon: ShieldCheck, items: ["Cybersecurity", "Git", "GitHub", "Azure", "Vercel", "Jupyter"] },
];

const experience = [
  {
    period: "Aug 2025 — Sep 2025",
    role: "App Development Intern",
    company: "CodSoft",
    details: "Built application features and resolved UI issues during a four-week Android app development internship.",
    cert: "/certificates/codsoft-internship.pdf",
  },
  {
    period: "May 2025 — Jun 2025",
    role: "Web Development Intern",
    company: "Coding Raja Technologies",
    details: "Worked on responsive web applications using HTML, CSS and JavaScript, with a focus on usability and layouts.",
    cert: "/certificates/coding-raja-internship.pdf",
  },
  {
    period: "Jan 2025",
    role: "Web Development Intern · Shopify",
    company: "Being Ambitious",
    details: "Customized Shopify e-commerce stores, improving UI, navigation and user experience while collaborating with a team.",
  },
];

const certificates = [
  ["Google AI Essentials", "Google · Coursera", "/certificates/google-ai-essentials.pdf"],
  ["Google Prompting Essentials", "Google · Coursera", "/certificates/google-prompting-essentials.pdf"],
  ["Google Cloud Gen AI Academy APAC 2026", "Google Cloud · Hack2skill", "/certificates/google-cloud-genai-academy.pdf"],
  ["Microsoft Azure: Hands On Training", "Udemy · AZ-900 / AZ-104 / AZ-305", "/certificates/microsoft-azure.pdf"],
  ["Data Science Workshop", "Techfest · IIT Bombay", "/certificates/data-science-iit-bombay.pdf"],
  ["Python and Django Framework + HTML 5", "Udemy", "/certificates/python-django-html.pdf"],
  ["HTML, JavaScript & Bootstrap", "Udemy", "/certificates/html-js-bootstrap.pdf"],
  ["Python Complete Course & Flask Framework", "Udemy", "/certificates/python-flask-html.pdf"],
];

function App() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [dark, setDark] = React.useState(true);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedCert, setSelectedCert] = React.useState(null);

  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <div className="site">
      <div className="ambient ambient-a"/>
      <div className="ambient ambient-b"/>
      <header className="header">
        <button className="logo" onClick={() => scrollTo("home")}>OM<span>.</span></button>
        <nav className={openMenu ? "nav open" : "nav"}>
          {["about","work","experience","skills","credentials"].map((x) =>
            <button key={x} onClick={() => scrollTo(x)}>{x}</button>
          )}
        </nav>
        <div className="header-right">
          <button className="theme" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
            {dark ? <Sun size={17}/> : <Moon size={17}/>}
          </button>
          <a className="github-pill" href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
          <button className="mobile-menu" onClick={() => setOpenMenu(v => !v)} aria-label="Open navigation">
            {openMenu ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero wrap">
          <div className="hero-left">
            <div className="availability"><i/> Available for internships & developer opportunities</div>
            <div className="hero-index">COMPUTER ENGINEERING · 2023—2027</div>
            <h1>Building digital<br/><span>things that matter.</span></h1>
            <p className="hero-role">Full Stack Developer <b>·</b> Java Developer <b>·</b> Data & ML Enthusiast</p>
            <p className="hero-copy">
              I turn ideas into practical products using modern web technologies, backend APIs,
              data workflows and security-focused engineering.
            </p>
            <div className="hero-cta">
              <button className="btn primary" onClick={() => scrollTo("work")}>See selected work <ArrowUpRight size={17}/></button>
              <a className="btn ghost" href={profile.resume} target="_blank" rel="noreferrer">View resume <Download size={16}/></a>
            </div>
            <div className="hero-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> github</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> linkedin</a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={16}/> leetcode</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="portrait-wrap">
              <div className="portrait-grid"/>
              <div className="portrait">
                <img src="/images/profile.jpg" alt="Om Prakash Borse"/>
              </div>
              <div className="portrait-caption"><b>OM PRAKASH BORSE</b><span>DEVELOPER / BUILDER</span></div>
            </div>
            <div className="hero-float float-one"><Zap size={15}/><span>4 featured<br/><b>projects</b></span></div>
            <div className="hero-float float-two"><span>3</span><small>internships</small></div>
          </div>
        </section>

        <section id="about" className="wrap section">
          <div className="section-label"><span>01</span><b>ABOUT</b></div>
          <div className="about-layout">
            <h2>I enjoy the space<br/>between <em>logic</em> and <em>design.</em></h2>
            <div>
              <p className="lead">I'm a Computer Engineering student who likes building, experimenting and learning by shipping real projects.</p>
              <p className="muted">My work spans full-stack applications, Java and Python development, data analysis, machine learning and cybersecurity. I care about useful UX, clean APIs and solutions that are easy to understand.</p>
              <div className="facts">
                <div><GraduationCap size={18}/><span><b>B.Tech Computer Engineering</b>SVKM's NMIMS · Shirpur</span></div>
                <div><ShieldCheck size={18}/><span><b>Security + Data</b>Cybersecurity, ML & analytics</span></div>
                <div><Code2 size={18}/><span><b>Build + Ship</b>React, Node, Python, Java</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="wrap section">
          <div className="section-label"><span>02</span><b>SELECTED WORK</b><small>Projects are the proof.</small></div>
          <div className="work-list">
            {projects.map((p) => (
              <article className={`work-card ${p.color}`} key={p.name} onClick={() => setSelectedProject(p)}>
                <div className="work-number">{p.number}</div>
                <div className="work-main">
                  <div className="work-eyebrow">{p.eyebrow}</div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="tech-row">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                </div>
                <div className="work-action"><ArrowUpRight size={21}/></div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="wrap section">
          <div className="section-label"><span>03</span><b>EXPERIENCE</b></div>
          <div className="experience-list">
            {experience.map((e, i) => (
              <article className="experience-row" key={e.company}>
                <div className="exp-index">0{i+1}</div>
                <div className="exp-date">{e.period}</div>
                <div className="exp-body"><span>{e.role}</span><h3>{e.company}</h3><p>{e.details}</p></div>
                {e.cert && <a href={e.cert} target="_blank" rel="noreferrer" className="cert-link">Certificate <ExternalLink size={15}/></a>}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="wrap section">
          <div className="section-label"><span>04</span><b>TOOLKIT</b><small>What I use to build.</small></div>
          <div className="skill-grid">
            {skills.map(({title, icon: Icon, items}) => (
              <div className="skill-box" key={title}>
                <Icon size={21}/><h3>{title}</h3><div>{items.map(x => <span key={x}>{x}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="credentials" className="wrap section">
          <div className="section-label"><span>05</span><b>CREDENTIALS</b><small>Continuous learning.</small></div>
          <div className="credentials-grid">
            {certificates.map(([name, org, file]) => (
              <button className="credential" key={name} onClick={() => setSelectedCert({name, org, file})}>
                <div className="credential-icon"><Award size={19}/></div>
                <div><span>{org}</span><h3>{name}</h3></div>
                <ChevronRight size={17}/>
              </button>
            ))}
          </div>
          <div className="learning-strip">
            <div><Sparkles size={20}/><b>Learning signal</b><span>Google AI Essentials · Prompting · Gen AI · Azure · Data Science</span></div>
            <a href={profile.resume} target="_blank" rel="noreferrer">Full resume <ArrowUpRight size={16}/></a>
          </div>
        </section>

        <section className="wrap section recognition">
          <div className="recognition-card">
            <div>
              <div className="section-label compact"><span>06</span><b>RECOGNITION</b></div>
              <h2>Strong problem-solving<br/><em>beyond code.</em></h2>
              <p>Abacus mathematics and problem-solving achievement, with district-level and state-level recognition, plus Smart India Hackathon participation.</p>
            </div>
            <div className="recognition-stats">
              <div><strong>1st</strong><span>District Level</span></div>
              <div><strong>3rd</strong><span>State Level</span></div>
              <div><strong>SIH</strong><span>Participant</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="wrap contact">
          <div className="contact-inner">
            <div className="section-label compact"><span>07</span><b>CONTACT</b></div>
            <h2>Have an opportunity?<br/><em>Let's talk.</em></h2>
            <p>Internships, developer roles, collaborations or interesting ideas — reach me directly.</p>
            <div className="contact-buttons">
              <a className="btn primary" href={`mailto:${profile.email}`}>Start a conversation <Mail size={17}/></a>
              <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={17}/></a>
            </div>
            <div className="contact-email"><Mail size={15}/> {profile.email}</div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© 2026 Om Prakash Borse</span>
        <span>React · Vite · Built with intention</span>
        <button onClick={() => scrollTo("home")}>Back to top <ArrowDown size={14}/></button>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className={`project-modal ${selectedProject.color}`} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}><X size={18}/></button>
            <div className="work-eyebrow">{selectedProject.eyebrow}</div>
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <div className="modal-tags">{selectedProject.tech.map(t => <span key={t}>{t}</span>)}</div>
            <div className="modal-actions">
              {selectedProject.github && <a className="btn primary" href={selectedProject.github} target="_blank" rel="noreferrer">View GitHub <Github size={16}/></a>}
              {selectedProject.live && <a className="btn primary" href={selectedProject.live} target="_blank" rel="noreferrer">Open live demo <ExternalLink size={16}/></a>}
            </div>
          </div>
        </div>
      )}

      {selectedCert && (
        <div className="modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}><X size={18}/></button>
            <div className="cert-preview"><iframe title={selectedCert.name} src={selectedCert.file}/></div>
            <div className="cert-modal-info"><div><span>{selectedCert.org}</span><h2>{selectedCert.name}</h2></div><a href={selectedCert.file} target="_blank" rel="noreferrer" className="btn primary">Open certificate <ExternalLink size={16}/></a></div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
