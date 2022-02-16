import react from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";
   import {
   BrowserRouter as Router,
   Switch,
   Route,
   } from "react-router-dom";

function App(){

    const [mode, setMode] = useState('light'); //weather dark mode enable or not

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) =>{
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }

    const toggleMode = () => {
              if(mode === 'light'){
                    setMode('dark');
                    document.body.style.backgroundColor = '#2a344f';
                    showAlert("Dark mode has been enabled", "success");
              }else{
                    setMode('light');
                    document.body.style.backgroundColor = 'white';
                    showAlert("Light mode has been enabled", "success");
              }
    }
    return(
    <>
          
          <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
          <Alert alert={alert}/>
          <div className="container my-1">
                <Switch>
                    <Route exact path="/about">
                      <About/>
                    </Route>
                <Route exact path="/">*/}
                      <TextForm showAlert={showAlert} heading="Enter The Text To Analyze below" mode = {mode}/>
                    </Route>
                </Switch>
                
          </div>
          </Router>
      </>
  );
  
}
export default App;
