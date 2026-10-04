import { useEffect, useId, useState } from "react";

const isPdf = (src) => src.split("?")[0].toLowerCase().endsWith(".pdf");

export default function DocumentModal({ item, onClose }) {
  const titleId = useId();
  const [index, setIndex] = useState(0);
  const docs = item.documents ?? [];
  const hasDocs = docs.length > 0;
  const current = docs[index];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (docs.length < 2) return;
      if (event.key === "ArrowRight") setIndex((i) => Math.min(i + 1, docs.length - 1));
      if (event.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden"; // arka plan kaymasın
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, docs.length]);

  return (
    <div className="home-doc-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="home-doc-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="home-doc-close" type="button" aria-label="Close document viewer" onClick={onClose}>
          ×
        </button>

        <p className="home-doc-kicker">{item.type} · {item.subtitle}</p>
        <h3 className="home-doc-title" id={titleId}>{item.title}</h3>

        <div className={`home-doc-body${docs.length < 2 ? " is-single" : ""}`}>
          {docs.length > 1 && (
            <div className="home-doc-thumbs">
              {docs.map((doc, i) => (
                <button
                  className={`home-doc-thumb${i === index ? " is-active" : ""}`}
                  type="button"
                  key={doc.label}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                >
                  <span className="home-doc-thumb-box">
                    {isPdf(doc.src) ? <span className="home-doc-pdf">PDF</span> : <img src={doc.src} alt="" />}
                  </span>
                  {doc.label}
                </button>
              ))}
            </div>
          )}

          <div className="home-doc-viewer">
            {hasDocs ? (
              isPdf(current.src) ? (
                <iframe className="home-doc-pdf-frame" src={current.src} title={current.label} />
              ) : (
                <img className="home-doc-image" src={current.src} alt={`${item.title} — ${current.label}`} />
              )
            ) : (
              <div className="home-doc-empty">
                <span className="home-doc-empty-tag">Document</span>
                <p className="home-doc-empty-title">{item.type} Document</p>
                <p className="home-doc-empty-text">The document will be displayed here once the file is added.</p>
              </div>
            )}
            <div className="home-doc-foot">
              <span>{hasDocs ? current.label : `${item.type} Document`}</span>
              <span>
                {hasDocs && isPdf(current.src) && (
                  <a className="home-doc-open" href={current.src} target="_blank" rel="noreferrer">
                    Open in new tab ↗
                  </a>
                )}
                {hasDocs ? index + 1 : 1} / {hasDocs ? docs.length : 1}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}