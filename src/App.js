import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import './App.css';

import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Welcome from './Welcome';
import Connect from './Connect';
import Experience from './Experience';
import Achievements from './Achievements';

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Connect />


  
      
    </div>

  
  );
}

export default App;
