
// import './App.css';

import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [Mode, setMode] = useState('light')
  
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#050606';
      showAlert("Dark mode has been enabled", "success")
      document.title ='Text Utils-Dark Mode'
      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#FFFFFF';
      showAlert("Light mode has been disabled", "success")
      document.title ='Text Utils-Light Mode'
    }
  }


  return (
    <>
    <BrowserRouter>
      <Navbar title="TexUtils" desc="About Text Utils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">

        <Routes>
          <Route path ="/" element ={<TextArea showAlert ={showAlert}heading="Enter text to analyze" mode={Mode} />}/>

          <Route path ="/about" element ={<About />}/>
        </Routes>
        
      </div>
 


      </BrowserRouter>
    </>
  )
}




export default App;
