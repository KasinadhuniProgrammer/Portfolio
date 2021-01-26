import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import './App.css';

import Header from './Header';
import About from './About';
import Technical from './Technical';
import Skills from './Skills';
import Projects from './Projects';
import Welcome from './Welcome';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Welcome />
      <Skills />
      <Projects />
      <Technical />


  
      
    </div>

  
  );
}

export default App;
