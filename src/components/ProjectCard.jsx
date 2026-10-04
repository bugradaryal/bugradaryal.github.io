import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { marked } from "marked";
import useGithubReadme from "../hooks/useGithubReadme";
import LanguageList from "./LanguageList";

function ProjectModal({ project, onClose }) {
  const titleId = useId();
  const { status, text } = useGithubReadme(project.githubUrl, true);

  const html = useMemo(
    () => (status === "loaded" ? marked.parse(text) : ""),
    [status, text],
  );

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden"; // arka plan kaymasın
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="project-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="project-modal-close" type="button" aria-label="Close project details" onClick={onClose}>
          ×
        </button>

        <img className="project-modal-image" src={project.image} alt={`${project.title} preview`} />

        <div className="project-modal-header">
          <div>
            <span className="project-modal-kicker">project details</span>
            <h2 id={titleId}>{project.title}</h2>
          </div>
          <time dateTime={project.dateTime}>{project.date}</time>
        </div>

        <LanguageList languages={project.languages} className="project-modal-languages" />

        <div className="project-modal-readme">
          {!project.githubUrl && <p>Project details will be added here.</p>}
          {status === "loading" && <p>Loading README...</p>}
          {status === "error" && <p>README could not be loaded.</p>}
          {status === "loaded" && (
            <div className="project-readme-markdown" dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </div>

        {project.githubUrl && (
          <a className="project-modal-github" href={project.githubUrl} target="_blank" rel="noreferrer">
            View on GitHub <span aria-hidden="true">→</span>
          </a>
        )}
      </section>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <article className="project-card">
      <button
        className="project-card-toggle"
        type="button"
        aria-haspopup="dialog"
        onClick={() => setIsModalOpen(true)}
      >
        <img className="project-card-image" src={project.image} alt="" loading="lazy" />
        <span className="project-card-bar">
          <span className="project-card-heading">
            {/* button içinde h2 geçersiz HTML, o yüzden span */}
            <span className="project-card-title">{project.title}</span>
            <span className="project-card-type">{project.type}</span>
          </span>
          <span className="project-card-icon" aria-hidden="true">→</span>
        </span>
      </button>

      <div className="project-card-content">
        <p className="project-card-description">{project.description}</p>
        <LanguageList languages={project.languages} />
      </div>

      {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
    </article>
  );
}