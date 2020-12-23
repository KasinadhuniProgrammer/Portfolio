import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import HeaderFile from './HeaderFile';
import BodyFile from './BodyFile';
import ProjectsFile from './ProjectsFile'
import './App.css';

function App() {
  return (
    <div className="app">
      <HeaderFile />
      <BodyFile />
      <ProjectsFile />
    </div>
  );
}

export default App;
