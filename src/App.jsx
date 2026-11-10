const skills = ['JavaScript', 'React', 'Node.js', 'Java', 'Python', 'PostgreSQL', 'AWS', 'Git & GitHub'];

const projects = [
  { title: 'Community Storage Finder', category: 'Full-stack Web App', description: 'A community-focused application for finding nearby shared food storage locations.', stack: 'Node.js · Express · PostgreSQL' },
  { title: 'Pokémon Matching Game', category: 'Frontend Development', description: 'An interactive memory game with difficulty levels, timers, and responsive layouts.', stack: 'JavaScript · HTML · CSS' },
  { title: 'AWS Resume CI/CD', category: 'Cloud & DevOps', description: 'This portfolio is built with React and automatically deployed using AWS CodePipeline.', stack: 'React · Vite · AWS' }
];

function SectionHeading({ eyebrow, title, children }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {children && <p>{children}</p>}
  </div>;
}

export default function App() {
  return (
    <>
      <header className="site-header">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href="#home">Thi Thao Uyen Le <span>.</span></a>
          <div className="nav-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        </nav>
      </header>
      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <span className="eyebrow">HELLO, I'm Thi Thao Uyen Le</span>
            <h1>Thi Thao Uyen Le<span className="accent">.</span></h1>
            <p className="hero-role">Software Developer <span>/</span> Cloud Enthusiast</p>
            <p className="hero-description">I build thoughtful digital experiences, explore cloud technologies, and enjoy turning ideas into reliable software.</p>
            <div className="actions"><a className="button primary" href="#projects">Explore My Work ↗</a><a className="button secondary" href="#contact">Get in Touch</a></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-ring">
              <div className="art-inner">&lt;/&gt;

              </div>
            </div>
            <span className="art-label">DESIGN · DEVELOP · DEPLOY</span>
          </div>
        </section>
        <section id="about" className="section section-alt">
          <div className="container"><SectionHeading eyebrow="01 / INTRODUCTION" title="About me" />
            <div className="about-layout">
              <p>I'm a computing student and aspiring software developer with an interest in full-stack applications,
                clean interfaces, and cloud infrastructure. I enjoy learning new technologies and solving practical problems through code.</p>
              <div className="about-note">
                <span>CURRENT FOCUS</span>
                <strong>Web development, cloud computing, and continuous deployment.</strong>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="section">
          <div className="container">
            <SectionHeading eyebrow="02 / TOOLKIT" title="Skills & technologies">Tools and technologies I've used in coursework and personal projects.</SectionHeading>
            <div className="skill-grid">{skills.map(skill =>
              <div className="skill" key={skill}>{skill}
                <span>↗</span></div>)}</div></div></section>
        <section id="projects" className="section section-alt">
          <div className="container">
            <SectionHeading eyebrow="03 / SELECTED WORK" title="Featured projects">A few projects that reflect my interests in software engineering.</SectionHeading>
            <div className="project-grid"> {projects.map((project, index) =>
              <article className="project-card" key={project.title}>
                <span className="project-number">0{index + 1} / {project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack}</div>
              </article>)}
            </div>
          </div>
        </section>
        <section id="contact" className="section contact">
          <div className="container"><span className="eyebrow">04 / CONTACT</span>
            <h2>Let's build something
              <br />
              <em>great together.</em>
            </h2>
            <p>Open to opportunities, collaboration, and interesting conversations.</p>
            <div className="actions">
              <a className="button primary" href="mailto:winuyenle112@gmail.com">Email Me ↗</a>
              <a className="button secondary" href="https://github.com/WynnLe12" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-content">
          <span>© {new Date().getFullYear()} Thi Thao Uyen Le</span>
          <span>Built with React + Vite · Deployed with AWS</span>
        </div>
      </footer>
    </>
  );
}
