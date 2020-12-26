import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import HeaderFile from './HeaderFile';
import BodyFile from './BodyFile';
import ProjectsFile from './ProjectsFile';
import Extracurriculars from './Extracurriculars';
import RandomFacts from './RandomFacts';
import Blog from './Blog';
import Connect from './Connect';
import './App.css';
import { useStateValue } from './StateProvider';
import Login from './Login';

function App() {
  const [{ user } , dispatch] = useStateValue(); 
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />

        ): (
          <>
            <HeaderFile />
            <BodyFile />
            <Extracurriculars />
            <RandomFacts />
            <ProjectsFile />
            <Connect />
            <Blog />
          </>

        )}
      </Router>
      
    </div>
  );
}

export default App;
