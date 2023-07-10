import "./App.css";
import Card from "./comp/Card";
import LandingPage from "./comp/LandingPage";
import Login from "./comp/Login";

function App() {
  return (
    <>
      <div className="">
        {/* header section */}
        <div className="">
        <div><LandingPage /></div>
        </div>

        {/* Main body section */}
        <div className="">
          <div>{/* <Login /> */}</div>

          {/* <div className="card-section"><Card/></div> */}

          
        </div>

        {/* Footer Section*/}
        {/* <div className="footer dark-bg">2</div> */}
      </div>
    </>
  );
}

export default App;
