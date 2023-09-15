import React from 'react';
import Nav from './Nav.js';
import About from "./About.js"
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Background from './Background.js';
import PlayerStats from './PlayerStats.js';
import '../components/styles/app.css';
import "../components/styles/background.css";
import "../components/styles/nav.css";
import "../components/styles/popup.css";
import "../components/styles/aboutMenu.css";
import "../components/styles/avatar.css";
import "../components/styles/contact.css";
import "../components/styles/projectsMenu.css";
import "../components/styles/skillsMenu.css";


function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Background />
      <div className="page-container">
        <Component {...pageProps} />
      </div>
      <PlayerStats />
    </>
  )
}

const PageWithScrollingContent = ({ component }) => {
  return (
    <div className="page-container">
      {component}
    </div>
  );
};

export default App;
