import React from "react";
import "../styles/about.css"; // Importing CSS file for styling

// About component that displays information about the developer.
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Profile image of the developer */}
        <img
          src="/images/avatar.jpg"
          alt="Profile Picture"
          className="profile-image"
        />
        <div className="about-text">
          <h2>Om Mig</h2>
          {/* Short introduction about the developer */}
          <p>
            Jag heter Ismail och är en passionerad frontendutvecklare med
            erfarenhet av HTML, CSS, JavaScript och React. Jag brinner för att
            skapa responsiva och användarvänliga webbapplikationer.
          </p>
          {/* Additional information about skills and experience */}
          <p>
            Jag har tidigare arbetat inom olika tekniska områden och har en
            stark förståelse för hur man bygger effektiva och skalbara
            lösningar. Mina styrkor ligger i problemlösning, design och att
            skapa smidiga användarupplevelser.
          </p>
          {/* Personal interests */}
          <p>
            När jag inte kodar gillar jag att utforska ny teknik och förbättra
            mina färdigheter genom att arbeta med egna projekt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
