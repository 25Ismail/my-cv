import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css"; // Importing CSS file for styling

// List of completed projects with titles, descriptions, and GitHub links.
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
