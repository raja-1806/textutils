import React, {useState} from 'react'
import Alert from './component/Alert'

// import About from './component/About';
import Navbar from './component/Navbar'
import Textform from './component/Textform'

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
    }, 1500);
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
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      <Textform heading="Enter your text below to analyze" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
    </>
  );
}

export default App;
