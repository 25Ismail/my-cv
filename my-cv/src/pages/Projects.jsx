import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css"; // Importing CSS file for styling

const projects = [
  {
    title: "Prototyp enligt kundbeskrivning",
    description:
      "Ett projekt där vi med agila metoder skapade en fungerande prototyp baserad på kundens krav och iterativa processer.",
    link: "https://github.com/Sterje/grupp5projekt",
    linkLabel: "Se på GitHub",
  },
  {
    title: "Responsiv webbdesign och SEO",
    description:
      "En webblösning byggd med HTML, Saas och preprocessor, optimerad för SEO, tillgänglighet och responsiv design.",
    link: "https://github.com/Viktorwahlqvist/Examinerande-projektuppgift?tab=readme-ov-file",
    linkLabel: "Se på GitHub",
  },
  {
    title: "Interaktiv solsystem-webbplats",
    description:
      "En webbplats byggd med HTML, CSS och vanilla JavaScript, som hämtar information via ett API om vårt solsystem.",
    link: "https://github.com/isee56-boop/isee56-boop.github.io?tab=readme-ov-file",
    linkLabel: "Se på GitHub",
  },
  {
    title: "UX-design: E-postapp för PRO",
    description:
      "En UX-prototyp i Figma för en mobil e-postapp riktad till seniorer, med fokus på tydlighet, enkelhet och tillgänglighet.",

    link: "https://www.figma.com/proto/nZ0WfgN8rlikLCfYr5q5D2/Examination?node-id=18-2&p=f&t=kO3BVWoOklPeuXN0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A2&show-proto-sidebar=1",
    linkLabel: "Visa i Figma",
  },
  {
    title: "Airbean – Kaffe med drönarleverans",
    description:
      "Ett backendprojekt i grupp där vi skapade ett REST-API med Express och SQLite för en kaffeleveransapp. Jag arbetade med endpoints, databas, middleware och teknisk dokumentation.",
    link: "https://github.com/miltonlindh/Grupp-6-Airbean",
    linkLabel: "Se på GitHub",
  },
];

// List of upcoming projects with titles and descriptions.
const upcomingProjects = [
  {
    title: "Filmrekommendationssida",
    description:
      "En webbplats där du kan välja filmer baserat på vilka känslor du vill uppleva.",
  },
  {
    title: "Speltips",
    description:
      "En app där användaren svarar på några enkla frågor om sin personlighet och får spelrekommendationer baserat på svaren.",
  },
  {
    title: "AI-driven bokrekommendationer",
    description:
      "En tjänst som rekommenderar böcker baserat på användarens läsvanor och intressen.",
  },
];

// Projects component that displays both completed and upcoming projects.
const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Mina Projekt</h2>
      <div className="projects-grid">
        {/* Render completed projects */}
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <h2>Kommande Projekt</h2>
      <div className="projects-grid">
        {/* Render upcoming projects */}
        {upcomingProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
