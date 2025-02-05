My CV React Application

This is a single-page React application that showcases my portfolio and CV, built using React, React Router, Redux, and HashRouter for GitHub Pages deployment.

Features

Responsive Design: Ensures compatibility across various devices.
Routing: Using React Router to navigate between different sections like Home, Projects, and Contact.
Dark Mode: A toggle button for switching between light and dark modes.
Redux: Used to manage global state for theme and contact form messages.

Technologies Used

React: JavaScript library for building user interfaces.
React Router: Library for handling routing and navigation.
Redux: State management library for handling global state.
HashRouter: Used instead of BrowserRouter for GitHub Pages compatibility.

Features and Functionality

Component Structure and Data Flow:

Reusable Components: Reusable components such as Navbar, Footer, and ProjectCard are used to structure the website efficiently.
Data Flow via Props: Data is passed between components using props, ensuring smooth data flow. For example, the ProjectCard component receives title, description, and link as props.
React Router:

Navigation: Implemented React Router to manage navigation between sections of the site, including:
Home
Projects
Contact

useState Hook:

State Management: The useState hook is used in the Contact component to manage the state of the form (name, message, and submission status).

Redux:

Global State Management: Integrated Redux for managing global state, including theme (dark mode) and contact form messages.
Code Quality and Documentation:
Clean Code: The code is well-structured and follows best practices for readability.
Comments: Important sections of the code are commented to clarify their functionality, especially for complex logic or state management.

Deployment

The application is deployed on GitHub Pages. You can view the live version of the site .
