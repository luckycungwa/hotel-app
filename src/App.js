//importing Router related elements
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./comp/Home";
import Login from "./comp/Login";
import Navbar from "./comp/Navbar";
import Facilities from "./comp/Facilities";

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Facilities" component={Facilities} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Router>
{/* 
      <div className="">
        
        <div className=""><div><LandingPage /></div></div>

        
        <div className="">
          <div><Login /></div>

          <div className="card-section"><Card/></div>
          <div><Facility /></div>
        </div>

        
        <div className="footer dark-bg">2</div>
      </div>

       */}

    </>
  );
}

export default App;
