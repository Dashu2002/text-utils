import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";


function App() {

    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message,type) => {
      setAlert({
        msg:message,
        type:type,
      })
      setTimeout(() => [
        setAlert(null)
      ],1500);
    }

    const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "#353535";
        showAlert("Dark Mode Has Been Enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = "#ffffff";
        showAlert("Light Mode Has Been Enabled","dark");
      }
    }

  return (
    <>
      <NavBar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode} />
      </div>
    </>
  );
}

export default App;
