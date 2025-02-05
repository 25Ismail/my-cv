import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/contactSlice";
import "../styles/contact.css"; // Importing CSS file for styling

// Contact component that displays user contact details
// and provides a form for sending messages.
const Contact = () => {
  const nameInputRef = useRef(null); // Reference for focusing input field
  const dispatch = useDispatch();
  const [message, setMessage] = useState(""); // State for message input
  const [name, setName] = useState(""); // State for name input
  const [submitted, setSubmitted] = useState(false); // State for form submission status

  // Automatically focus on the name input field when the component mounts
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  // Handles form submission, dispatches message to Redux store, and updates state
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name, message })); // Send message data to Redux store
    setSubmitted(true); // Set submission status to true
  };

  return (
    <div className="contact-container">
      <h2>Kontakt</h2>
      <div className="contact-card">
        <h3>Kontakta mig</h3>
        {/* Displaying contact details */}
        <p>
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:ismail.yusuftakow@student.kyh.se">
            ismail.yusuftakow@student.kyh.se
          </a>
        </p>
        <p>
          📞 <strong>Telefon:</strong> <a href="tel:0700220281">070-0220281</a>
        </p>
        <p>
          🔗 <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/ismail-takow"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ismail-takow
          </a>
        </p>
        <p>
          💻 <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/25Ismail"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/25Ismail
          </a>
        </p>
      </div>

      <p>Du kan även skicka ett meddelande via kontaktformuläret nedan.</p>
      {submitted ? (
        // Show confirmation message after successful submission
        <p className="confirmation-message">
          Tack {name}! Ditt meddelande har skickats.
        </p>
      ) : (
        // Contact form for user input
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Name input field with automatic focus */}
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
          {/* Message textarea for user input */}
          <label className="form-label">
            Meddelande:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="form-textarea"
            ></textarea>
          </label>
          {/* Submit button to send message */}
          <button type="submit" className="submit-button">
            Skicka
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
