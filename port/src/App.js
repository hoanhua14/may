// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Profile from "./Profile.js";
import Exp from "./Exp.js";
import Edu from "./Edu.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";
function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
        </div>
        <div style={{ backgroundColor: "#f2f2f2" }}>
          <Profile />
          <Exp />
          <Edu />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
