import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

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

  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggelMode={toggelMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
            path="/"
          ></Route>
          <Route exact element={<About mode={mode} />} path="/about"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
