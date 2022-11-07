import React, {useState} from 'react'

// import About from './component/About';
import Navbar from './component/Navbar'
import Textform from './component/Textform'

function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = "white"
    }else{
      setMode("dark")
      document.body.style.backgroundColor = "#042723"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Textform heading="Enter your text below to analyze" mode={mode}/>
      {/* <About /> */}
    </>
  );
}

export default App;
