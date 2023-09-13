import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode= () =>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.title = "TextUtils - Dark Mode";
    }
  }
  return (
      <>
      <Router>
      <Navbar title="Text Converter" home= 'Home'aboutText='About' mode = {mode} toggleMode = {toggleMode}/>
      <div className = "conainer my-3">
        <Routes>
          <Route path="/" element = {<TextForm heading="Enter your text" mode = {mode}/>} />
          <Route path="/about" element= {<About  mode = {mode}/>} />
        </Routes>
      </div>
      </Router>
      </>
  );
}

export default App;
