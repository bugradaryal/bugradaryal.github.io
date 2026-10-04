import { useCallback, useState } from "react";
import DocumentModal from "./DocumentModal";

export default function EduCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const hasDocuments = item.documents?.length > 0;
  const isHighlight = item.highlight ?? item.type === "Degree";
  const label = item.status ? `${item.type} · ${item.status}` : item.type;

  return (
    <article className="home-edu-card">
      <div className="home-edu-head">
        <span className="home-avatar" aria-hidden="true">{item.initials}</span>
        <div>
          <h3 className="home-edu-title">{item.title}</h3>
          <p className="home-edu-sub">{item.subtitle}</p>
        </div>
      </div>
      <div className="home-edu-foot">
        <span className={`home-tag${isHighlight ? " is-highlight" : ""}`}>{label}</span>
        {hasDocuments ? (
          <button className="home-edu-link" type="button" aria-haspopup="dialog" onClick={() => setIsOpen(true)}>
            View document <span aria-hidden="true">↗</span>
          </button>
        ) : (
          <span className="home-edu-empty">No document</span>
        )}
      </div>

      {isOpen && hasDocuments && <DocumentModal item={item} onClose={closeModal} />}
    </article>
  );
}