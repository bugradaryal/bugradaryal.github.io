import "./Contact.css";

export default function Contact() {
  return (
    <main>
      <div className="page-head">
        <span className="eyebrow">get in touch</span>
        <h1>Contact</h1>
        <p className="lede">
          Open to full-stack and backend roles. The fastest way to reach me is email — I usually reply within a day.
        </p>
      </div>

      <div className="terminal">
        <div className="titlebar">
          <span className="tdot r"></span><span className="tdot y"></span><span className="tdot g"></span>
          &nbsp;contact.json
        </div>
        <div className="body">
          <p className="line"><span className="prompt">$</span> <span className="out">cat contact.json</span></p>
          <p className="line">{"{"}</p>
          <p className="line">
            &nbsp;&nbsp;"email":{" "}
            <a href="mailto:bugradaryal0@gmail.com" className="out contact-link">
              "bugradaryal0@gmail.com"
            </a>,
          </p>
          <p className="line">&nbsp;&nbsp;"phone": <span className="out">"+90 531 337 5881"</span>,</p>
          <p className="line">&nbsp;&nbsp;"location": <span className="out">"Tekirdağ / Türkiye"</span>,</p>
          <p className="line">
            &nbsp;&nbsp;"github":{" "}
            <a href="https://github.com/bugradaryal" target="_blank" rel="noopener" className="out contact-link">
              "github.com/bugradaryal"
            </a>,
          </p>
          <p className="line">
            &nbsp;&nbsp;"linkedin":{" "}
            <a href="https://linkedin.com/in/buğra-daryal" target="_blank" rel="noopener" className="out contact-link">
              "linkedin.com/in/buğra-daryal"
            </a>
          </p>
          <p className="line">{"}"}</p>
        </div>
      </div>

      <section>
        <div className="grid-cols">
          <div className="card">
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-desc">Best for anything detailed — roles, project briefs, questions about my work.</p>
            <a className="btn btn-primary" href="mailto:bugradaryal0@gmail.com">Send an email →</a>
          </div>
          <div className="card">
            <h3 className="contact-card-title">Phone</h3>
            <p className="contact-card-desc">For a quicker chat or call.</p>
            <a className="btn btn-ghost" href="tel:+905313375881">+90 531 337 5881</a>
          </div>
          <div className="card">
            <h3 className="contact-card-title">Elsewhere</h3>
            <p className="contact-card-desc">Code on GitHub, background on LinkedIn.</p>
            <div className="hero-actions">
              <a className="btn btn-ghost" href="https://github.com/bugradaryal" target="_blank" rel="noopener">GitHub ↗</a>
              <a className="btn btn-ghost" href="https://linkedin.com/in/buğra-daryal" target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}