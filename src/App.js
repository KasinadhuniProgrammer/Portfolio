import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import './App.css';

import Header from './Header';
import About from './About';

function App() {
  return (
    <div className="app">
      <Header />
      <About />


  
      
    </div>
  );
}

export default App;
