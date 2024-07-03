import sh from "./images/sh.png";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="App-header">
      <div className="container">
        <img className="image" src={sh} alt="logo" />
      </div>
      <div>
        <Link
          to="profile"
          smooth={true}
          duration={500}
          className="link-pointer"
        >
          Profile
        </Link>
      </div>
      <div>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="link-pointer"
        >
          Projects
        </Link>
      </div>
      <div>
        <Link
          to="education"
          smooth={true}
          duration={500}
          className="link-pointer"
        >
          Education
        </Link>
      </div>

      <div>
        <Link to="skills" smooth={true} duration={500} className="link-pointer">
          Skills
        </Link>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/hoanhua/">
          <img
            src="https://img.icons8.com/doodle/48/linkedin--v2.png"
            alt="linkedin"
          ></img>
        </a>

        <a href="https://github.com/hoanhua14">
          <img
            src="https://img.icons8.com/doodle/48/github--v1.png"
            alt="github"
          ></img>
        </a>
      </div>
    </div>
  );
};
export default Header;
