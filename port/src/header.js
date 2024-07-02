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
    </div>
  );
};
export default Header;
