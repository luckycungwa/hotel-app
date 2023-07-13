//importing Router related elements
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Home from "./comp/Home";
import Login from "./comp/Login";
import Navbar from "./comp/Navbar";
import Facilities from "./comp/Facilities";
import Signin from "./comp/Signin";
import Rooms from "./comp/Rooms";
import Booking from "./comp/Booking";

function App() {
  const [signedIn, setSignIn] = useState();

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Facilities" component={Facilities} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Signin} />
          <Route path="/Rooms" component={Rooms} />
          <Route path="/Booking" component={Booking} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
