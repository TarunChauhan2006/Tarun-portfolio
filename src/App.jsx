import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Code2,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Layers3,
  GraduationCap,
  UserRound,
  BriefcaseBusiness,
  Award,
} from "lucide-react";
import "./App.css";

const profile = {
  name: "Tarun Chauhan",
  email: "chauhantarun30613@gmail.com",
  github: "https://github.com/TarunChauhan2006",
  linkedin: "https://www.linkedin.com/in/tarun-chauhan-3aa840328/",
  location: "Greater Noida, India",
};

const projects = [
  {
    number: "01",
    title: "MediNova AI",
    category: "HEALTHCARE PLATFORM",
    description:
      "An AI-powered healthcare ecosystem for patient management, medical records, appointments and healthcare assistance.",
    tech: ["React", "FastAPI", "PostgreSQL", "JWT"],
    link: profile.github,
  },
  {
    number: "02",
    title: "TarunTaskManager",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A task management application featuring authentication, task organization and a responsive user interface.",
    tech: ["React", "FastAPI", "SQLAlchemy", "JWT"],
    link: "https://github.com/TarunChauhan2006/TarunTaskManager",
  },
  {
    number: "03",
    title: "AI Chatbot",
    category: "CONVERSATIONAL APPLICATION",
    description:
      "An interactive chatbot application using API-driven communication, JSON data exchange and backend services.",
    tech: ["Python", "FastAPI", "REST APIs"],
    link: profile.github,
  },
  {
    number: "04",
    title: "JARVIS AI Assistant",
    category: "VOICE AUTOMATION",
    description:
      "A voice-controlled personal assistant designed for speech interaction, application launching and web searches.",
    tech: ["Python", "Speech Recognition", "Automation"],
    link: profile.github,
  },
];

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Development",
    icon: Terminal,
    skills: ["React", "FastAPI", "Node.js", "REST APIs", "HTML & CSS"],
  },
  {
    title: "AI & Data",
    icon: Cpu,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "FAISS",
    ],
  },
  {
    title: "Tools & Databases",
    icon: Layers3,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "DSA",
      "OOP",
    ],
  },
];

const certifications = [
  { name: "Python Programming", issuer: "GUVI | HCL" },
  { name: "Database Programming with SQL", issuer: "Oracle Academy" },
  { name: "Java Programming", issuer: "Oracle Academy" },
  { name: "E-Business", issuer: "NPTEL · IIT Kharagpur" },
  { name: "C Programming", issuer: "GUVI | HCL" },
];

const education = [
  {
    period: "2024 — 2027",
    degree: "Bachelor of Computer Applications",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Galgotias University",
    location: "Greater Noida, India",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function SocialMark({ type, size = 18 }) {
  if (type === "linkedin") {
    return (
      <span
        className="linkedin-mark"
        style={{ width: size, height: size }}
      >
        in
      </span>
    );
  }

  if (type === "email") return <Mail size={size} />;

  return <Code2 size={size} />;
}

function SectionHeading({ number, eyebrow, title, highlight }) {
  return (
    <motion.div
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section-eyebrow">
        <span className="section-number">{number}</span>
        <span className="eyebrow-line" />
        <span>{eyebrow}</span>
      </div>

      <h2>
        {title} <span>{highlight}</span>
      </h2>
    </motion.div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Tarun Chauhan home">
        <span className="brand-symbol">
          T<span>.</span>C
        </span>
        <span className="brand-divider" />
        <span className="brand-name">TARUN CHAUHAN</span>
      </a>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map(([label, href], index) => (
          <a
            key={label}
            href={href}
            className={index === 0 ? "nav-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}

        <a
          className="nav-cta"
          href={`mailto:${profile.email}`}
          onClick={() => setMenuOpen(false)}
        >
          LET&apos;S TALK <ArrowUpRight size={15} />
        </a>

        <div className="mobile-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <SocialMark type="github" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <SocialMark type="linkedin" />
          </a>
          <a href={`mailto:${profile.email}`}>
            <SocialMark type="email" />
          </a>
        </div>
      </nav>

      <div className="nav-socials">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <SocialMark type="github" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <SocialMark type="linkedin" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  const [photoLoaded, setPhotoLoaded] = useState(true);

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.div
          className="availability"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="status-dot" />
          OPEN TO INTERNSHIP OPPORTUNITIES
        </motion.div>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          HELLO, I&apos;M <strong>TARUN CHAUHAN</strong>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7 }}
        >
          Building
          <br />
          digital
          <br />
          <span>experiences.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          BCA student at Galgotias University, passionate about software
          development, modern web technologies and building products that
          solve real-world problems.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#projects" className="button-primary">
            EXPLORE MY WORK <ArrowRight size={17} />
          </a>

          <a href="#contact" className="button-secondary">
            GET IN TOUCH <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          <a href={profile.github} target="_blank" rel="noreferrer">
            <SocialMark type="github" /> GITHUB <ArrowUpRight size={13} />
          </a>

          <span className="social-divider" />

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <SocialMark type="linkedin" /> LINKEDIN{" "}
            <ArrowUpRight size={13} />
          </a>
        </motion.div>

        <a href="#about" className="scroll-indicator">
          <span className="mouse-icon">
            <span />
          </span>
          <span className="scroll-accent" />
          SCROLL TO EXPLORE
        </a>
      </div>

      <motion.div
        className="hero-center"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="portrait-glow" />

        <div className="portrait-frame">
          <div className="portrait-topline">
            <span className="portrait-dot" />
            <span>PROFILE_001</span>
            <span className="portrait-status">AVAILABLE</span>
          </div>

          <div className="portrait-image-wrap">
            {photoLoaded && (
              <img
                src="/tarun.png"
                alt="Tarun Chauhan"
                className="portrait-image"
                onLoad={() => setPhotoLoaded(true)}
                onError={() => setPhotoLoaded(false)}
              />
            )}

            {!photoLoaded && (
              <div className="portrait-placeholder">
                <span>TC</span>
                <small>ADD YOUR PHOTO</small>
              </div>
            )}

            <div className="portrait-shade" />

            <div className="portrait-caption">
              <span>SOFTWARE DEVELOPER</span>
              <h3>Tarun Chauhan</h3>
            </div>

            <span className="portrait-corner corner-tl" />
            <span className="portrait-corner corner-tr" />
            <span className="portrait-corner corner-bl" />
            <span className="portrait-corner corner-br" />
          </div>

          <div className="portrait-footer">
            <span>
              BUILD <b>·</b> LEARN <b>·</b> GROW
            </span>
            <Sparkles size={18} />
          </div>
        </div>

        <div className="portrait-floating floating-code">
          <Code2 size={18} />
          <div>
            <strong>AI/ML Engineer</strong>
            <span>Always building</span>
          </div>
        </div>

        <div className="portrait-floating floating-location">
          <MapPin size={18} />
          <div>
            <strong>Greater Noida</strong>
            <span>India</span>
          </div>
        </div>

        <div className="portrait-index">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
      </motion.div>

      <motion.aside
        className="hero-info"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <div className="info-card personal-card">
          <div className="info-card-heading">
            <span>/ 01</span>
            <p>PERSONAL INFO</p>
          </div>

          <div className="info-row">
            <UserRound />
            <div>
              <strong>{profile.name}</strong>
              <span>AI/ML Engineer</span>
            </div>
          </div>

          <div className="info-row">
            <GraduationCap />
            <div>
              <strong>BCA Student</strong>
              <span>Galgotias University</span>
            </div>
          </div>

          <div className="info-row">
            <MapPin />
            <div>
              <strong>{profile.location}</strong>
              <span>Open to opportunities</span>
            </div>
          </div>

          <div className="info-row">
            <Code2 />
            <div>
              <strong>Software Development</strong>
              <span>Build · Learn · Grow</span>
            </div>
          </div>
        </div>

        <div className="info-card coordinates-card">
          <div>
            <span className="mini-label">
              <Globe size={15} /> LOCATION
            </span>
            <p>28.4744° N</p>
            <p>77.5040° E</p>
          </div>

          <div className="coordinate-globe">
            <Globe size={45} strokeWidth={0.8} />
          </div>
        </div>

        <div className="info-card quote-card">
          <span className="quote-mark">“</span>
          <p>
            Better code.
            <br />
            Better solutions.
            <br />
            A brighter future.
          </p>
          <span className="quote-line" />
        </div>
      </motion.aside>
    </section>
  );
}

function About() {
  return (
    <section className="section-wrap content-section" id="about">
      <SectionHeading
        number="01"
        eyebrow="GET TO KNOW ME"
        title="Driven by curiosity."
        highlight="Built with purpose."
      />

      <div className="about-grid">
        <motion.div
          className="about-main"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="about-mark">“</span>

          <h3>
            I turn ideas into practical digital experiences through code,
            creativity and continuous learning.
          </h3>

          <p>
            I&apos;m Tarun, a BCA student at Galgotias University. I enjoy
            building applications, solving problems and exploring the tools
            behind modern software.
          </p>

          <p>
            My approach is simple: understand the problem, build a useful
            solution, and keep improving it.
          </p>

          <a href="#contact" className="text-link">
            LET&apos;S CONNECT <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="about-stats">
          <motion.div
            className="stat-card"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="stat-icon">
              <Code2 />
            </span>
            <strong>
              04<span>+</span>
            </strong>
            <p>Featured projects</p>
          </motion.div>

          <motion.div
            className="stat-card"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="stat-icon">
              <Layers3 />
            </span>
            <strong>
              15<span>+</span>
            </strong>
            <p>Tools & technologies</p>
          </motion.div>

          <motion.div
            className="stat-card stat-card-wide"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="stat-icon">
              <BriefcaseBusiness />
            </span>
            <div>
              <h4>Ready for the next opportunity</h4>
              <p>Open to internships and learning-focused roles.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-wrap content-section" id="skills">
      <SectionHeading
        number="02"
        eyebrow="MY TECH STACK"
        title="The tools behind"
        highlight="the ideas."
      />

      <p className="section-description">
        Technologies and fundamentals I use while learning and building
        practical applications.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              className="skill-card"
              key={group.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="skill-card-heading">
                <span className="skill-card-icon">
                  <Icon size={21} />
                </span>
                <span className="skill-card-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    <span className="skill-chip-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-wrap content-section" id="projects">
      <SectionHeading
        number="03"
        eyebrow="SELECTED WORK"
        title="Ideas into"
        highlight="reality."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -7 }}
          >
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-icon">
                <Code2 size={23} />
              </span>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title}`}
                className="project-open"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>

            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              VIEW ON GITHUB <ArrowUpRight size={16} />
            </a>
          </motion.article>
        ))}
      </div>

      <motion.a
        className="all-projects-link"
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        EXPLORE MY GITHUB <ExternalLink size={16} />
      </motion.a>
    </section>
  );
}

function Education() {
  return (
    <section className="section-wrap content-section" id="education">
      <SectionHeading
        number="04"
        eyebrow="MY JOURNEY"
        title="Education &"
        highlight="certifications."
      />

      <div className="journey-grid">
        <div className="education-column">
          <h3 className="subsection-title">
            <GraduationCap size={21} /> EDUCATION
          </h3>

          {education.map((item) => (
            <motion.article
              className="education-card"
              key={item.degree}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="timeline-dot" />
              <span className="education-period">{item.period}</span>
              <h4>{item.degree}</h4>
              <p className="education-specialization">
                {item.specialization}
              </p>
              <p>{item.institution}</p>
              <span className="education-location">
                <MapPin size={14} /> {item.location}
              </span>
            </motion.article>
          ))}
        </div>

        <div className="certifications-column">
          <h3 className="subsection-title">
            <Award size={21} /> CERTIFICATIONS & LEARNING
          </h3>

          <div className="certification-list">
            {certifications.map((cert, index) => (
              <motion.article
                className="certification-card"
                key={cert.name}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <span className="certification-icon">
                  <Award size={19} />
                </span>

                <div>
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="certification-arrow"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="contact-glow" />

      <SectionHeading
        number="05"
        eyebrow="LET'S CONNECT"
        title="Have an idea?"
        highlight="Let's build it."
      />

      <motion.div
        className="contact-content"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>
          Interested in working together, discussing a project or sharing an
          opportunity? I&apos;d be happy to connect.
        </p>

        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowUpRight size={22} />
        </a>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={17} /> EMAIL ME
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <SocialMark type="linkedin" /> LINKEDIN
          </a>

          <a href={profile.github} target="_blank" rel="noreferrer">
            <SocialMark type="github" /> GITHUB
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="brand footer-brand" href="#home">
        <span className="brand-symbol">
          T<span>.</span>T
        </span>
      </a>

      <p>Designed & built with curiosity by Tarun Chauhan.</p>

      <a href="#home" className="back-to-top">
        BACK TO TOP <ArrowUpRight size={14} />
      </a>

      <span className="footer-copy">
        © {new Date().getFullYear()} TARUN CHAUHAN
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="portfolio">
      <div className="background-grid" />
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}