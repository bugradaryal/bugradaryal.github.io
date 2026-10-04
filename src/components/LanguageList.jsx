export default function LanguageList({ languages = [], className = "" }) {
  return (
    <div className={`project-languages ${className}`.trim()} aria-label="Programming languages">
      {languages.map((language) => (
        <span className="project-language" key={language}>{language}</span>
      ))}
    </div>
  );
}