import hr from "./images/HR.png";
import chabot from "./images/Chabot.png";
const Edu = () => {
  return (
    <div className="degrees">
      <img
        className="degree"
        // style={{
        //   maxHeight: "40%",
        //   maxWidth: "40%",
        //   outline: "5px black solid",
        //   borderRadius: "5px",
        // }}
        src={hr}
        alt="HR"
      />
      <img className="degree" src={chabot} alt="chabot" />
    </div>
  );
};
export default Edu;
