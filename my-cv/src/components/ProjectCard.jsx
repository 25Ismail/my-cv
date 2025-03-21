import React from "react";

// ProjectCard component displays individual project details.
// It takes in title, description, an optional link, and an optional linkLabel as props.
const ProjectCard = ({ title, description, link, linkLabel }) => {
  return (
    <div className="project-card">
      {/* Display project title */}
      <h3>{title}</h3>

      {/* Display project description */}
      <p>{description}</p>

      {/* If a link exists, display a link with the custom label or fallback */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {linkLabel || "Se projekt"}
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
