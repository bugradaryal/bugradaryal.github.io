import { Link } from "react-router";
import "./Projects.css";

export default function Projects() {
  return (
    <main>
      <div className="page-head">
        <span className="eyebrow">selected work</span>
        <h1>Projects</h1>
        <p className="lede">
          A few things I've shipped: a desktop email client, a microservice-based matchmaking API, and an AI
          chat platform with full observability. Write-ups are on the way.
        </p>
      </div>

      <div className="empty-state">
        <div className="badge"><span className="dot"></span>deploying</div>
        <h2 className="empty-title">Project pages are being built</h2>
        <p className="lede empty-lede">
          This section is coming soon — detailed write-ups for each project, with architecture notes and links,
          are on their way. In the meantime, the code is on GitHub.
        </p>
        <div className="hero-actions empty-actions">
          <a className="btn btn-primary" href="https://github.com/bugradaryal" target="_blank" rel="noopener">Browse GitHub →</a>
          <Link className="btn btn-ghost" to="/cv">See project summaries in CV</Link>
        </div>
      </div>

      <section className="queued-section">
        <div className="section-label"><span>queued</span><span>// not yet published</span></div>
        <div className="projects-grid">
          <div className="project-ghost">
            <div>XyzMail — Desktop Email Client</div>
            <div className="bar"></div>
          </div>
          <div className="project-ghost">
            <div>Gamebuddy API — Matchmaking Platform</div>
            <div className="bar"></div>
          </div>
          <div className="project-ghost">
            <div>AIChatCore — AI Chat Platform</div>
            <div className="bar"></div>
          </div>
        </div>
      </section>
    </main>
  );
}