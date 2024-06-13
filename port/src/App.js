// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Profile from "./Profile.js";
function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
        </div>
        <div style={{ backgroundColor: "#f2f2f2" }}>
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
