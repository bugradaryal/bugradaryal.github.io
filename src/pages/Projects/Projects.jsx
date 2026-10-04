import { useMemo, useState } from "react";
import { completedProjects, queuedProjects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import LanguageList from "../../components/LanguageList";
import "./Projects.css";

const PREVIEW_COUNT = 4;

// Veri statik olduğu için component dışında bir kez hesaplanıyor
const availableLanguages = [...new Set(completedProjects.flatMap((p) => p.languages))].sort();

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [languageFilter, setLanguageFilter] = useState("");

  const filteredProjects = useMemo(
    () =>
      languageFilter
        ? completedProjects.filter((p) => p.languages.includes(languageFilter))
        : completedProjects,
    [languageFilter],
  );

  const hasMore = filteredProjects.length > PREVIEW_COUNT;
  const isExpanded = showAll || !hasMore; // gizlenecek proje yoksa fade olmasın
  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, PREVIEW_COUNT);

  const handleFilterChange = (event) => {
    setLanguageFilter(event.target.value);
    setShowAll(false);
  };

  return (
    <main>
      <div className="page-head">
        <span className="eyebrow">selected work</span>
        <h1>Projects</h1>
      </div>

      <section className="completed-section">
        <div className="project-filter">
          <label htmlFor="language-filter">Filter by language</label>
          <select id="language-filter" value={languageFilter} onChange={handleFilterChange}>
            <option value="">All languages</option>
            {availableLanguages.map((language) => (
              <option value={language} key={language}>{language}</option>
            ))}
          </select>
        </div>

        <div className={`completed-projects-preview${isExpanded ? " is-open" : ""}`}>
          <div className="completed-projects-grid">
            {displayedProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>

        {hasMore && (
          <button
            className="btn btn-primary completed-projects-more"
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll((open) => !open)}
          >
            {showAll ? "Show less" : "View more"}
            <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
          </button>
        )}
      </section>

      <section className="queued-section">
        <div className="section-label"><span>queued</span><span>// not yet published</span></div>
        <div className="projects-grid">
          {queuedProjects.length > 0 ? (
            queuedProjects.map((project) => (
              <div className="project-ghost" key={project.title}>
                <div className="project-ghost-head">
                  <span className="project-ghost-title">{project.title}</span>
                  <span className="project-card-type">{project.type}</span>
                </div>
                <p className="project-ghost-description">{project.description}</p>
                <LanguageList languages={project.languages} />
                <div className="bar"></div>
              </div>
            ))
          ) : (
            <div className="project-ghost">
              <p className="project-ghost-description">Something new is on the way.</p>
              <div className="bar"></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}