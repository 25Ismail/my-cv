# **My CV React Application**

This is a **single-page React application** showcasing my portfolio and CV. It is built using **React**, **React Router**, **Redux**, and **HashRouter** for seamless deployment on **GitHub Pages**.

---

## **Features**

- **Responsive Design**: Adapts to different devices for an optimal viewing experience.
- **Routing**: Uses **React Router** to navigate between pages like:
  - **Home** (About Me)
  - **Projects** (My Portfolio)
  - **Contact** (Get in Touch)
- **Dark Mode**: Includes a toggle to switch between light and dark themes.
- **Redux State Management**: Manages global states like theme preferences and stores contact form messages.

---

## **Technologies Used**

- **React**: For building the user interface.
- **React Router**: For managing navigation and routes.
- **Redux**: For handling global state efficiently.
- **HashRouter**: Ensures compatibility with **GitHub Pages**.

---

## **Features and Functionality**

### **1. Component Structure and Data Flow**

- **Reusable Components**:
  - Components like `Navbar`, `Footer`, and `ProjectCard` improve reusability and maintainability.
- **Data Flow via Props**:
  - Props are used to pass data between components.
  - For example, the `ProjectCard` component receives `title`, `description`, and `link` as props to display project details.

### **2. React Router**

- **Navigation**:
  - Implemented **React Router** to handle navigation between different sections, such as:
    - **Home**: Introduction to who I am.
    - **Projects**: Overview of my work.
    - **Contact**: A form to send me a message.

### **3. useState Hook**

- Used in the **Contact Form** to manage form states, including:
  - **Name**
  - **Message**
  - **Submission Status**

### **4. Redux**

- **Theme State Management**: Handles dark/light mode toggling.
- **Contact Form State**: Stores and manages messages sent via the contact form.

### **5. useRef Hook**

- `useRef` is used in **Contact.jsx** to automatically focus the name input field when the page loads.
- This improves user experience by allowing users to start typing immediately.
- Example of implementation:

```javascript
useEffect(() => {
  if (nameInputRef.current) {
    nameInputRef.current.focus();
  }
}, []);


## **Deployment**

The application is deployed on **GitHub Pages**.
👉 **Live Demo**: [View the project here](https://25ismail.github.io/my-cv)

---

## **Code Quality**

- The codebase follows best practices for readability and maintainability:
  - Clear structure for components, pages, and state management.
  - Inline comments are included to explain complex logic.


  ## **How to Run the Project**

## Installation & Setup

1. Clone the repository:
git clone https://github.com/25Ismail/my-cv.git

2. Navigate to the project directory:
   cd my-cv

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

---

## Contact

If you have any questions or feedback, feel free to reach out via email or through my portfolio website.

🚀 Made with ❤️ using React.
```
