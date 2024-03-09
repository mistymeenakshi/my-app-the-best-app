import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Meenakshi's About" Contacts="Contacts" />
      <div className="container my-3"></div>
      <TextForm heading="Enter the Text" />
    </>
  );
}

export default App;
