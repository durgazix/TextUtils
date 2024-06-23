// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm' ;
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
  
const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null) ;
    }, 1500);
}
  
const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert("DarkMode has been enabled", "success")
    // document.title = "DarkMode - Enabled" ;
      // setInterval(() => {
      //   document.title = "TextUtils is Awazing"; 
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"; 
      // }, 1500);
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("LightMode has been enabled", "success")
    // document.title = "LightMode - Enabled" ;
  }
}
  
  return (
    <>
     <Router>
     <Navbar title="TextUtils" mode ={mode} toggleMode = {toggleMode} />
     <Alert alert = {alert}/>
     <div className="container my-3">
     <Routes>
          <Route exact path="/about" element={<About mode ={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Trim Text :" mode ={mode} />}/>
     </Routes>
     </div>
    </Router>
    </>
  );
}

export default App;

