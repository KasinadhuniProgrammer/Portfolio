import React from 'react'; 
import './ProjectFiles.css'; 
import studentlistrandomimg from './studentlistrandomimg.png';
import anotherrandomstudentlistimg from './anotherrandomstudentlistimg.png';

function ProjectsFiles() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <div className="projectfiles">
            <center><h1>Projects 🧑‍💻</h1></center>
            <div className="satviksslackprojectthing">
                <div className="satviksslackprojectthing__container">
                    <center><h2>Satviks Slack</h2></center>
                    <center><h3>December 2020</h3></center>
                    <center><h4>My own version of Slack, built with React.js and Firebase.</h4></center>

                </div>
                <div className="mechlevelsprojectthing">
                    <div className="mechlevelsprojectthing__container">
                        <center><h2>MechLevels</h2></center>
                        <center><h3>December 2020 - PRESENT</h3></center>
                        <center><h4>A website for Mechanical Engineers to see compensations from top companies.</h4></center>

                    </div>
                    
                </div>
            </div>
            
        </div>
    );

}

export default ProjectsFiles;