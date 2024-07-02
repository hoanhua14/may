import coder from "./images/coder.png";
import { ReactTyped } from "react-typed";
const Profile = () => {
  return (
    <div className="profile">
      <div>
        <img className="profile-pic" src={coder} alt="pic" />
      </div>
      <a href="https://www.linkedin.com/in/hoanhua/">
        <img
          src="https://img.icons8.com/clouds/100/linkedin.png"
          alt="linkedin"
        ></img>
      </a>
      <div>
        <ReactTyped
          strings={[
            "I’m a dedicated software engineer who is passionate about discovering new technologies, automating processes and tackling real world problems to make life easier. ",
          ]}
          typeSpeed={20}
        />
      </div>
    </div>
  );
};
export default Profile;
