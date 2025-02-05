import React from "react";

// ProjectCard component displays individual project details.
// It takes in title, description, and an optional link as props.
const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      {/* Display project title */}
      <h3>{title}</h3>
      {/* Display project description */}
      <p>{description}</p>
      {/* If a link exists, display a GitHub link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Se på GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
