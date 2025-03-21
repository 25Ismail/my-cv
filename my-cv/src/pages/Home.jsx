import React from "react";
import "../styles/about.css"; // Importing CSS file for styling
import profilePic from "../assets/ismail.png";

// About component that displays information about the developer.
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Profile image of the developer */}
        <img src={profilePic} alt="Profile Picture" className="profile-image" />

        <div className="about-text">
          <h2>Om Mig</h2>
          {/* Short introduction about the developer */}
          <p>
            Jag heter Ismail och är en engagerad frontendstudent med erfarenhet
            av <span className="tech-html">HTML</span>,{" "}
            <span className="tech-css">CSS</span>,{" "}
            <span className="tech-js">JavaScript</span>,{" "}
            <span className="tech-react">React</span> och{" "}
            <span className="tech-ux">UX-design</span>. Jag älskar att bygga
            responsiva och användarvänliga webbapplikationer med fokus på
            tydlighet och design.
          </p>
          {/* Additional information about skills and experience */}
          <p>
            Som student utvecklar jag ständigt mina färdigheter genom både
            utbildning och egna projekt. Jag brinner för problemlösning, att
            skapa smidiga användarupplevelser och att hela tiden lära mig ny
            teknik.
          </p>
          {/* Personal interests */}
          <p>
            På fritiden utforskar jag ny teknik och bygger små projekt för att
            utmana mig själv och lära mig mer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
