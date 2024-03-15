import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { React, useState } from "react";

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
      <Navbar title="Meenakshi's About" Contacts="Contacts" />
      <Alert alert={alert} />

      <div className="container my-3"></div>
      {<TextForm showAlert={showAlert} heading="Enter the Text" />}

      <About />
    </>
  );
}

export default App;
