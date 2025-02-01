import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/contactSlice";
import "../styles/contact.css"; // Importerar CSS-fil för styling

const Contact = () => {
  const nameInputRef = useRef(null);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name, message }));
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Kontakt</h2>
      <p>Vill du komma i kontakt med mig? Här är mina kontaktuppgifter:</p>
      <ul className="contact-info">
        <li>
          <strong>Email:</strong> ismail@example.com
        </li>
        <li>
          <strong>Telefon:</strong> +46 70 123 45 67
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/ismail"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ismail
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/ismail"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ismail
          </a>
        </li>
      </ul>
      <p>Du kan även skicka ett meddelande via kontaktformuläret nedan.</p>

      {submitted ? (
        <p className="confirmation-message">
          Tack {name}! Ditt meddelande har skickats.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label className="form-label">
            Namn:
            <input
              type="text"
              ref={nameInputRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            Meddelande:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="form-textarea"
            ></textarea>
          </label>
          <button type="submit" className="submit-button">
            Skicka
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
