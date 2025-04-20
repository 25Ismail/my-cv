import React, { useEffect } from "react";
import {
  HashRouter as Router, // Use HashRouter for GitHub Pages support
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/themeSlice";
import contactReducer from "./redux/contactSlice";
import "./styles/main.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/themeSlice";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

// Configuring the Redux Store with theme and contact reducers
const store = configureStore({
  reducer: {
    theme: themeReducer, // Handles theme-related state (light/dark mode)
    contact: contactReducer, // Manages contact messages
  },
});

// Component for the application header, including dark mode toggle
function AppHeader() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Apply dark mode styling dynamically
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document
      .querySelector(".app-container")
      .classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <header className="app-header">
      <h1>Portfolio</h1>
      <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
        {darkMode ? "☀ Ljus läge" : "🌙 Mörkt läge"}
      </button>
    </header>
  );
}

// Main Application Component
function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Provides the Redux store to the app */}
      <div className="app-container">
        <AppHeader />
        <Navbar />
        <main>
          <Routes>
            {/* Redirects the root path to the Home page */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirects any unknown path to Home */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
