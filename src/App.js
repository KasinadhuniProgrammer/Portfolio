import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import HeaderFile from './HeaderFile';
import BodyFile from './BodyFile';
import ProjectsFile from './ProjectsFile';
import Extracurriculars from './Extracurriculars';
import Technical from './Technical';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeaderFile />
      <BodyFile />
      <ProjectsFile />
      <Extracurriculars />
      <Technical />
    </div>
  );
}

export default App;
