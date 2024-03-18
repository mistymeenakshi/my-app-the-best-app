import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  //showAlert("Darkmode is for the use", "success");

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Home">
            <About />
          </Route>
          <Route path="/App">
            {<TextForm showAlert={showAlert} heading="Enter the Text" />}
          </Route>
        </Switch>
      </Router>
      <Alert alert={alert} />
      <div className="container my-3"></div>
    </>
  );
}

export default App;
