import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import './App.css';

import Header from './Header';
import Projects from './Projects';
import Welcome from './Welcome';
import Connect from './Connect';

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Projects />
      <Connect />


  
      
    </div>

  
  );
}

export default App;
