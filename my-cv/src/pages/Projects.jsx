import React from "react";
import "../styles/projects.css"; // Importerar CSS-fil för styling

const projects = [
  {
    title: "Prototyp enligt kundbeskrivning",
    description:
      "Ett projekt där vi med agila metoder skapade en fungerande prototyp baserad på kundens krav och iterativa processer.",
    link: "https://github.com/Sterje/grupp5projekt",
  },
  {
    title: "Responsiv webbdesign och SEO",
    description:
      "En webblösning byggd med HTML, CSS och preprocessor, optimerad för SEO, tillgänglighet och responsiv design.",
    link: "https://viktorwahlqvist.github.io/Examinerande-projektuppgift/",
  },
  {
    title: "Interaktiv solsystem-webbplats",
    description:
      "En webbplats byggd med HTML, CSS och vanilla JavaScript, som hämtar information via ett API om vårt solsystem.",
    link: "https://github.com/isee56-boop/isee56-boop.github.io?tab=readme-ov-file",
  },
];

const upcomingProjects = [
  {
    title: "Filmrekommendationssida",
    description:
      "En webbplats där du kan välja filmer baserat på vilka känslor du vill uppleva.",
  },
  {
    title: "speltips",
    description:
      "En app där användaren svarar på några enkla frågor om sin personlighet och får spelrekommendationer baserat på svaren.",
  },
  {
    title: "AI-driven bokrekommendationer",
    description:
      "En tjänst som rekommenderar böcker baserat på användarens läsvanor och intressen.",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Mina Projekt</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Se på GitHub
            </a>
          </div>
        ))}
      </div>

      <h2>Kommande Projekt</h2>
      <div className="projects-grid">
        {upcomingProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
