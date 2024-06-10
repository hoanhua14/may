import sh from "./images/sh.png";

const Header = () => {
  return (
    <div className="App-header">
      <div className="container">
        <img className="image" src={sh} alt="logo" />
      </div>
      <div>Profile</div>
      <div>Exp</div>
      <div>Ed</div>
      <div>Skills</div>
      <div>Contact me</div>
    </div>
  );
};
export default Header;
