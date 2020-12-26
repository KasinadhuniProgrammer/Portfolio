import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import HeaderFile from './HeaderFile';
import BodyFile from './BodyFile';
import ProjectsFile from './ProjectsFile';
import Extracurriculars from './Extracurriculars';
import RandomFacts from './RandomFacts';
import Blog from './Blog';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeaderFile />
      <BodyFile />
      <Extracurriculars />
      <RandomFacts />
      <ProjectsFile />
      <Blog />
    </div>
  );
}

export default App;
