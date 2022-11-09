import React, {useState} from 'react'
import Alert from './component/Alert'

import About from './component/About';
import Navbar from './component/Navbar'
import Textform from './component/Textform'
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }else{
      setMode("dark")
      document.body.style.backgroundColor = "#041202"
      showAlert("Dark Mode has been enabled", "success")
    }
  }
 
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      
      <Routes>
        <Route exact path="/" element={ <Textform heading="Enter your text below to analyze" mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
