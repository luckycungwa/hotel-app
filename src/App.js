import "./App.css";
import Login from "./comp/Login";

function App() {
  return (
    <>
      <div className="App">
        {/* header section */}
        <div className="header dark-bg">1</div>

        {/* Main body section */}
        <div className="main">
          <Login />
        </div>

        {/* Footer Section*/}
        <div className="footer dark-bg">2</div>
      </div>
    </>
  );
}

export default App;
