import { Link } from "react-router";
import { EXPERIENCE, SKILLS, EDUCATION, CERTIFICATES, PRIMARY_SKILLS, selectedProjects } from "../../data/home";
import EduCard from "../../components/EduCard";
import photo from "../../assets/photo.png";
import "./Home.css";

const CV_URL = "/cv.pdf";
const GITHUB_URL = "https://github.com/bugradaryal";

const PRIMARY = new Set(PRIMARY_SKILLS);

function Section({ id, label, children }) {
  return (
    <section className="home-section" aria-labelledby={id}>
      <h2 className="home-label" id={id}>{label}</h2>
      <div className="home-section-body">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="home">
      {/* ---------- Hero ---------- */}
      <header className="home-hero">
        <div className="home-hero-text">
          <p className="home-eyebrow">Software Developer / Full-Stack Developer</p>
          <h1 className="home-title">
            Learning by building; APIs, auth, containers, and the UI that sits on top.
          </h1>
          <p className="home-lead">
            I build full-stack systems, AI integrations, and end-to-end digital products, from API services to web,
            mobile, and desktop applications.
          </p>
          <div className="home-cta">
            <a className="home-btn home-btn-primary" href={CV_URL} target="_blank" rel="noreferrer">
              View CV <span aria-hidden="true">→</span>
            </a>
            <Link className="home-btn" to="/contact">Get in touch</Link>
            <a className="home-btn" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <figure className="home-term">
          <figcaption className="home-term-bar">
            <span className="home-dot home-dot-red" />
            <span className="home-dot home-dot-amber" />
            <span className="home-dot home-dot-green" />
            <span className="home-term-name">bugra_daryal.container</span>
          </figcaption>
          <img className="home-term-photo" src={photo} alt="Buğra Daryal" />
          <div className="home-term-foot">
            <span>Tekirdağ, TR</span>
            <span className="home-running">● running</span>
          </div>
        </figure>
      </header>

      {/* ---------- About ---------- */}
      <Section id="home-about" label="// about">
        <div className="home-prose">
          <p>
            I develop desktop applications, API services, web applications, and mobile applications using modern
            software development principles and technologies such as ASP.NET Core, Java Spring Boot, React.js,
            React Native, RESTful APIs, SQL databases, and Docker. I also have a strong interest in Object-Oriented
            Programming (OOP), layered architecture, and modern software development practices.
          </p>
          <p>
            On the backend, I primarily focus on the .NET, ASP.NET Core, and Java Spring Boot ecosystems. On the
            frontend, I work with React.js, Next.js, and Vite.js. I aim to build maintainable, scalable, and
            well-structured software systems by applying architectural approaches and design patterns such as
            layered architecture and CQRS.
          </p>
          <p>
            I am always eager to learn new technologies, improve my skills, and develop effective solutions to
            complex problems.
          </p>
        </div>
      </Section>

      {/* ---------- Experience ---------- */}
      <Section id="home-experience" label="// experience">
        <ol className="home-log">
          {EXPERIENCE.map((job) => (
            <li className="home-log-entry" key={job.role + job.org}>
              <div className="home-log-meta">
                <span className="home-log-status">completed</span>
                {job.period}
              </div>
              <h3 className="home-log-role">{job.role}</h3>
              <span className="home-log-org">{job.org}</span>
              <p className="home-log-project">{job.project}</p>
              <ul className="home-log-list">
                {job.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <ul className="home-chips">
                {job.tags.map((tag) => <li className="home-chip" key={tag}>{tag}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------- Featured projects ---------- */}
      <Section id="home-projects" label="// selected projects">
        <div className="home-projects">
          {selectedProjects.map((project) => (
            <Link className="home-project" to="/projects" key={project.title}>
              <img className="home-project-image" src={project.image} alt={project.title} />
              <span className="home-project-type">{project.type}</span>
              <h3 className="home-project-title">
                {project.title} <span className="home-arrow" aria-hidden="true">→</span>
              </h3>
              <p className="home-project-desc">{project.description}</p>
              <ul className="home-chips">
                {project.languages.map((language) => <li className="home-chip" key={language}>{language}</li>)}
              </ul>
            </Link>
          ))}
        </div>
        <Link className="home-more" to="/projects">All projects <span aria-hidden="true">→</span></Link>
      </Section>

      {/* ---------- Skills ---------- */}
      <Section id="home-skills" label="// skills">
        <dl className="home-skills">
          {SKILLS.map((group) => (
            <div className="home-skill-row" key={group.label}>
              <dt>{group.label}</dt>
              <dd>
                <ul className="home-chips">
                  {group.items.map((item) => (
                    <li className={`home-chip${PRIMARY.has(item) ? " is-primary" : ""}`} key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ---------- Education ---------- */}
      <Section id="home-education" label="// education">
        <div className="home-edu-grid">
          {EDUCATION.map((item) => <EduCard item={item} key={item.title} />)}
        </div>
      </Section>

      {/* ---------- Certificates & courses ---------- */}
      <Section id="home-certificates" label="// certificates & courses">
        <div className="home-edu-grid">
          {CERTIFICATES.map((item) => <EduCard item={item} key={item.title} />)}
        </div>
      </Section>
    </main>
  );
}