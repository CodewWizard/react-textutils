import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Dark");
  const [bg, setBG] = useState("white");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBG("dark");
      setModeText("Light");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setBG("light");
      setModeText("Dark");
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <Alert alert={alert} />
      <div className="container my-3">
     <Router>

        <Routes>
        <Route index element={<TextForm mode={mode} showAlert={showAlert} />} />

        <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      </div>
    </>
  );
}
