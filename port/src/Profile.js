import pic from "./images/pic.png";
import { ReactTyped } from "react-typed";
const Profile = () => {
  return (
    <div className="profile">
      <div>
        <img className="profile-pic" src={pic} alt="pic" />
      </div>
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
