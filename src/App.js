import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Aboutus from './components/Aboutus';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1900);
  };

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
    document.title = 'TextUtils - mode changed';
  }

  const colorMode = (e) => {
    document.body.style.backgroundColor = e.target.innerText;
    // if(e.target.innerText== "black"){

    // }
    setMode(e.target.innerText);
    showAlert(e.target.innerText + ' mode is enabled', "success");
  }

  return (
    <>
      <Router>
        <Navbar title="BROAPP" mode={mode} toggleMode={toggleMode} colorMode={colorMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact  path="/about" element={<Aboutus mode={mode} />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text here" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
          {/* <Aboutus mode={mode}/> */}
        </div>
      </Router>
    </>
  );
}

export default App;