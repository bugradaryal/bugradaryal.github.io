import "./Experience.css";

export default function Experience() {
  return (
    <main>
      <div className="page-head">
        <span className="eyebrow">work history</span>
        <h1>Experience</h1>
      </div>

      <section>
        <div className="log-entry">
          <div className="log-meta"><span className="status">completed</span>12/2024 → 01/2025</div>
          <h3>Full-Stack Developer — Intern</h3>
          <span className="org">Pinsoft · IT Solutions and Consulting</span>
          <p className="log-stack">Blog Platform</p>
          <ul>
            <li>Developed an OOP-based REST API using .NET and N-Tier Architecture, implementing JWT authentication with refresh tokens; persisted refresh tokens in the database to provide secure session management.</li>
            <li>Implemented user management and role-based authorization using EF Core (Code First) and ASP.NET Identity; integrated email verification link delivery via SMTP using MailKit.</li>
            <li>Developed a responsive blog application with React.js, creating a user interface featuring a dashboard with Material UI and multilingual support using i18next; also gained hands-on experience with Java and PostgreSQL during the development process.</li>
            <li>Implemented user/content moderation via an admin panel, including account suspension, dynamic date-filtered charts, and API tests.</li>
          </ul>
          <div className="tags">
            <span className="tag">ASP.NET Core</span><span className="tag">React.js</span><span className="tag">MSSQL</span><span className="tag">Serilog</span>
          </div>
        </div>

        <div className="log-entry">
          <div className="log-meta"><span className="status">completed</span>04/2025 → 05/2025</div>
          <h3>Backend Developer — Intern</h3>
          <span className="org">Heweso Web Tasarım</span>
          <p className="log-stack">Airline Management System</p>
          <ul>
            <li>Developed an OOP/N-Tier architecture-based airline management system using REST APIs and MediatR-based CQRS; implemented secure session management with JWT authentication and database-persisted refresh tokens, along with centralized exception handling. Built management modules for airport and airline operations — flights, ticket/seat reservations, crew and staff, fuel/weight tracking, and aircraft maintenance — along with user and role management via Identity.</li>
            <li>Containerized the API, PostgreSQL, Redis, and Elasticsearch (Kibana) services using Docker Compose, creating an isolated and reproducible development/testing environment that could be launched with a single command.</li>
            <li>Built centralized logging with Serilog, writing logs to PostgreSQL and Elasticsearch in parallel and enabling Kibana analysis.</li>
            <li>Optimized external API calls by periodically fetching the Central Bank of the Republic of Türkiye (CBRT) exchange rate XML via Hangfire and caching data in Redis; used the data for ticket pricing and centrally logged Redis operations.</li>
          </ul>
          <div className="tags">
            <span className="tag">ASP.NET Core</span><span className="tag">PostgreSQL</span><span className="tag">Docker</span><span className="tag">Redis</span><span className="tag">Elasticsearch</span><span className="tag">MediatR</span><span className="tag">Serilog</span><span className="tag">Hangfire</span>
          </div>
        </div>
      </section>
    </main>
  );
}