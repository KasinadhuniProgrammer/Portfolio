import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import './App.css';

import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Welcome from './Welcome';
import Connect from './Connect';
import Experience from './Experience';

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Experience />
      <Skills />
      <Projects />
      <Connect />


  
      
    </div>

  
  );
}

export default App;
