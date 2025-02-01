import React from "react";
import "../styles/about.css"; // Importerar CSS-fil för styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="/images/profile.jpg" alt="Ismail" className="profile-image" />
        <div className="about-text">
          <h2>Om Mig</h2>
          <p>
            Jag heter Ismail och är en passionerad frontendutvecklare med
            erfarenhet av HTML, CSS, JavaScript och React. Jag brinner för att
            skapa responsiva och användarvänliga webbapplikationer.
          </p>
          <p>
            Jag har tidigare arbetat inom olika tekniska områden och har en
            stark förståelse för hur man bygger effektiva och skalbara
            lösningar. Mina styrkor ligger i problemlösning, design och att
            skapa smidiga användarupplevelser.
          </p>
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
