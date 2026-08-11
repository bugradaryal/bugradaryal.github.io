import "./Cv.css";
import cvPdf from "../../assets/bugra-daryal-cv.pdf";
export default function Cv() {
  return (
    <main>
      <div className="page-head cv-head">
        <div>
          <span className="eyebrow">resume.pdf</span>
          <h1>CV</h1>
          <p className="lede">
            Full resume — experience, skills, education and certificates. View it below or download the PDF.
          </p>
        </div>
        <a className="btn btn-primary" href={cvPdf} download>Download PDF ↓</a>
      </div>

      <div className="cv-embed">
        <iframe src={cvPdf} title="Buğra Daryal — CV" />
      </div>
      <p className="cv-fallback">
        Can't see the preview? <a href={cvPdf} target="_blank" className="cv-fallback-link">Open the PDF directly</a>.
      </p>
    </main>
  );
}