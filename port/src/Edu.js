import hr from "./images/HR.png";
import chabot from "./images/Chabot.png";
const Edu = () => {
  return (
    <div className="hr">
      <img style={{ maxHeight: "40%", maxWidth: "40%" }} src={hr} alt="HR" />
      <img
        style={{ maxHeight: "40%", maxWidth: "40%" }}
        src={chabot}
        alt="chabot"
      />
    </div>
  );
};
export default Edu;
