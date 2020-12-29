import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import './App.css';

import Header from './Header';
import About from './About';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Technical from './Technical';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
      <Technical />


  
      
    </div>
  );
}

export default App;
