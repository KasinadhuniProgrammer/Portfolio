import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import './App.css';

import Header from './Header';
import Projects from './Projects';
import Welcome from './Welcome';
import Connect from './Connect';
import Skillset from './Skillset';

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Skillset />
      <Projects />
      <Connect />


  
      
    </div>

  
  );
}

export default App;
