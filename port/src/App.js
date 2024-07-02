// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Profile from "./Profile.js";
import Projects from "./Projects.js";
import Edu from "./Edu.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";
import { Element } from "react-scroll";
function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
        </div>
        <div style={{ backgroundColor: "#f2f2f2" }}>
          <Element name="profile">
            <Profile />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="education">
            <Edu />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
