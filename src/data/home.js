import heroImage from "../assets/hero.png";
import graduationImage from "../assets/project-documents/graduation-certificate.png";
import ismek from "../assets/project-documents/ismek.jpg";
import cleancode from "../assets/project-documents/cleancode.jpg";
import reactcourse from "../assets/project-documents/react-course.jpg";
import aichatcore from "../assets/project-documents/aichatcore.png";
import airport from "../assets/project-documents/airport.png";
import subkeep from "../assets/project-documents/subkeep.png";
import blog from "../assets/project-documents/blog.png";
import sqlcourse from "../assets/project-documents/sql-course.jpg";



// Skills bölümünde dolu zeminli gösterilecek ana stack
export const PRIMARY_SKILLS = [
  "C#",
  "ASP.NET Core",
  "EntityFramework Core",
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "MSSQL",
  "PostgreSQL",
  "Git",
  "Docker",
  "Azure",
];

export const EXPERIENCE = [
  {
    role: "Backend Developer — Intern",
    org: "Heweso Web Tasarım",
    period: "04/2025 → 05/2025",
    project: "Airline Management System",
    points: [
      "Developed an OOP/N-Tier architecture-based airline management system using REST APIs and MediatR-based CQRS; implemented secure session management with JWT authentication and database-persisted refresh tokens, along with centralized exception handling. Built management modules for airport and airline operations — flights, ticket/seat reservations, crew and staff, fuel/weight tracking, and aircraft maintenance — along with user and role management via Identity.",
      "Containerized the API, PostgreSQL, Redis, and Elasticsearch (Kibana) services using Docker Compose, creating an isolated and reproducible development/testing environment that could be launched with a single command.",
      "Built centralized logging with Serilog, writing logs to PostgreSQL and Elasticsearch in parallel and enabling Kibana analysis.",
      "Optimized external API calls by periodically fetching the Central Bank of the Republic of Türkiye (CBRT) exchange rate XML via Hangfire and caching data in Redis; used the data for ticket pricing and centrally logged Redis operations.",
    ],
    tags: ["ASP.NET Core", "PostgreSQL", "Docker", "Redis", "Elasticsearch", "MediatR", "Serilog", "Hangfire"],
  },
  {
    role: "Full-Stack Developer — Intern",
    org: "Pinsoft · IT Solutions and Consulting",
    period: "12/2024 → 01/2025",
    project: "Blog Platform",
    points: [
      "Developed an OOP-based REST API using .NET and N-Tier Architecture, implementing JWT authentication with refresh tokens; persisted refresh tokens in the database to provide secure session management.",
      "Implemented user management and role-based authorization using EF Core (Code First) and ASP.NET Identity; integrated email verification link delivery via SMTP using MailKit.",
      "Developed a responsive blog application with React.js, creating a user interface featuring a dashboard with Material UI and multilingual support using i18next; also gained hands-on experience with Java and PostgreSQL during the development process.",
      "Implemented user/content moderation via an admin panel, including account suspension, dynamic date-filtered charts, and API tests.",
    ],
    tags: ["ASP.NET Core", "React.js", "MSSQL", "Serilog"],
  },
];

export const SKILLS = [
  { label: "Backend", items: ["C#", "ASP.NET Core", "Java", "EntityFramework Core", "Spring Boot", "Spring Web"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Angular.js", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { label: "Databases", items: ["MSSQL", "MySQL", "PostgreSQL", "SQLLite"] },
  { label: "DevOps & Tools", items: ["Git", "Docker", "Elasticsearch", "Redis", "Azure"] },
  { label: "Libraries", items: ["AutoMapper", "FluentValidation", "JWT", "ASP.NET Identity", "Hangfire", "MailKit", "MediatR", "Serilog", "SignalR", "Hibernate"] },
];

export const EDUCATION = [
  {
    type: "Degree",
    title: "Bilecik Şeyh Edebali University",
    subtitle: "Computer Engineering · GPA 3.0/4.0 · Graduated 2025",
    initials: "BŞ",
    highlight: true,
    documents: [ { label: "Transcript", src: graduationImage } ],
  },
];
 
// Sertifikalar ve kurslar. Yeni kayıt eklemek için sadece bir satır yaz.
// Devam eden için: status: "In progress" ekle, bitince sil.
export const CERTIFICATES = [
  { type: "Course - Completed", highlight: true, title: "HTML & CSS Fundamentals", subtitle: "İSB İSMEK", initials: "İS", documents: [{ label: "Certificate", src: ismek }] },
  { type: "Certificate - Ongoing", title: "Azure Fundamentals", subtitle: "Microsoft", initials: "MS", documents: [] },
  { type: "Certificate", title: "Clean Code", subtitle: "Udemy", initials: "UD", documents: [{ label: "Certificate", src: cleancode }] },
  { type: "Certificate", title: "SQL for Data Analysis", subtitle: "Udemy", initials: "UD", documents: [{ label: "Certificate", src: sqlcourse }] },
  { type: "Certificate", title: "React & Context API from Scratch", subtitle: "Udemy", initials: "UD", documents: [{ label: "Certificate", src: reactcourse }] },
];

export const selectedProjects = [
  {
    title: "AIChatCore",
    type: "AI Chat Platform",
    image: aichatcore,
    description: `A foundation for building AI-powered chat experiences. Structured to keep conversations and integrations easy to extend.`,
    languages: [".NET Core", "Docker", "Next.js", "JavaScript", "CSS", "HTML", "PostgreSQL", "Elasticsearch"],
  },
  {
    title: "SkyAirport API",
    type: "Heavy Airport API",
    image: airport,
    description: `An API for airport and flight-related application data. Built to provide a structured backend for travel workflows.`,
    languages: [".NET Core", "Docker", "Next.js", "JavaScript", "CSS", "HTML", "PostgreSQL", "Elasticsearch"],
  },
  {
    title: "SubKeep Native",
    type: "Subscription Tracker",
    image: subkeep,
    description: `A native application for keeping subscriptions organized and visible. Built to make recurring expenses easier to track.`,
    languages: ["React Native", "TypeScript", "CSS", "Kotlin", "JavaScript"],
  },
  {
    title: "Blog React",
    type: "Blog Frontend",
    image: blog,
    description: `A responsive blog interface for presenting posts in a clear reading experience. Built with reusable frontend components.`,
    languages: ["React.js", "JavaScript", "CSS", "HTML"],
  },
];