import { Link } from "react-router";
import "./Home.css";
import profileIcon from "../../assets/photo.png"
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <div className="role">Software Developer / Full-Stack Developer</div>
          <h1>Learning by building; APIs, auth, containers, and the UI that sits on top.</h1>
          <p className="desc">
            I am a Computer Engineering graduate building my career as a Full-Stack / Software Developer.
          </p>
          <p className="desc">
            I develop desktop applications, API services, web applications, and mobile applications using
            modern software development principles and technologies such as ASP.NET Core, Java Spring Boot,
            React.js, React Native, RESTful APIs, SQL databases, and Docker. I also have a strong interest in
            Object-Oriented Programming (OOP), layered architecture, and modern software development practices.
          </p>
          <p className="desc">
            On the backend, I primarily focus on the .NET, ASP.NET Core, and Java Spring Boot ecosystems.
            On the frontend, I work with React.js, Next.js, and Vite.js. I aim to build maintainable, scalable,
            and well-structured software systems by applying architectural approaches and design patterns such
            as layered architecture and CQRS.
          </p>
          <p className="desc">
            I am always eager to learn new technologies, improve my skills, and develop effective solutions to
            complex problems.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/cv">View CV →</Link>
            <a className="btn btn-ghost" href="mailto:bugradaryal0@gmail.com">Get in touch</a>
            <a className="btn btn-ghost" href="https://github.com/bugradaryal" target="_blank" rel="noopener">GitHub ↗</a>
          </div>
        </div>
        <div className="profile-card">
          <div className="titlebar">
            <span className="tdot r"></span><span className="tdot y"></span><span className="tdot g"></span>
            &nbsp;bugra_daryal.container
          </div>
          <img src={profileIcon} alt="Portrait of Buğra Daryal" />
          <div className="meta">
            <span>Tekirdağ, TR</span>
            <span className="live">● running</span>
          </div>
        </div>
      </section>

      <section>
        <div className="section-label"><span>Skills</span></div>
        <div className="grid-cols">
          <div className="skillbox">
            <h3>Languages</h3>
            <div className="tags">
              <span className="tag">C#</span><span className="tag">Java</span><span className="tag">JavaScript</span>
            </div>
          </div>
          <div className="skillbox">
            <h3>Backend</h3>
            <div className="tags">
              <span className="tag">ASP.NET Core(API/MVC)</span><span className="tag">.NET</span><span className="tag">EF Core</span><span className="tag">Spring Boot</span><span className="tag">Spring Web</span>
            </div>
          </div>
          <div className="skillbox">
            <h3>Frontend</h3>
            <div className="tags">
              <span className="tag">React.js</span><span className="tag">Next.js</span><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">Bootstrap</span>
            </div>
          </div>
          <div className="skillbox">
            <h3>Databases</h3>
            <div className="tags">
              <span className="tag">MSSQL</span><span className="tag">MySQL</span><span className="tag">PostgreSQL</span>
            </div>
          </div>
          <div className="skillbox">
            <h3>Desktop & Mobile</h3>
            <div className="tags">
              <span className="tag">Wpf</span><span className="tag">React Native</span>
            </div>
          </div>
          <div className="skillbox">
            <h3>DevOps & Tools</h3>
            <div className="tags">
              <span className="tag">Git</span><span className="tag">Docker</span><span className="tag">Elasticsearch</span><span className="tag">Redis</span><span className="tag">Azure</span>
            </div>
          </div>
          <div className="skillbox columngrid">
            <h3>Libraries</h3>
            <div className="tags">
              <span className="tag">AutoMapper</span><span className="tag">FluentValidation</span><span className="tag">JWT</span><span className="tag">ASP.NET Identity</span><span className="tag">Hangfire</span><span className="tag">MailKit</span><span className="tag">MediatR</span><span className="tag">Serilog</span><span className="tag">SignalR</span><span className="tag">Hibernate</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-label"><span>Education & Certificates</span></div>
        <div className="grid-cols edu-grid">
          <div className="card">
            <h3 className="edu-title">Bilecik Şeyh Edebali University</h3>
            <p className="edu-sub">B.Sc. in Computer Engineering</p>
            <p className="edu-meta">GPA 3.0/4.0 · Graduated 2025</p>
          </div>
          <div className="card">
            <ul className="cert-list">
              <li>Azure Fundamentals <span className="src">Microsoft</span></li>
              <li>Clean Code <span className="src">Udemy</span></li>
              <li>SQL for Data Analysis <span className="src">Udemy</span></li>
              <li>React & Context API from Scratch <span className="src">Udemy</span></li>
              <li>HTML & CSS Fundamentals <span className="src">İBB İSMEK</span></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}