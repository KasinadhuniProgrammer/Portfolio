import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="projects">
            <center><h1>Projects</h1></center>
            <div className="slackclonecontainer">
                <h3>Satviks Slack</h3>
                <h4>My own version of Slack, developed with React.js and Firebase</h4>
            </div>
            <div className="mechlevelscontainer">
                <h3>MechLevels(in-progress)</h3>
                <h4>A website that shows Mechanical Engineers compensations from top companies</h4>
            </div>
            <div className="studentlistcontainer">
                <h3>StudentList(in-progress)</h3>
                <h4>A website for high school students to find internships and research opportunities</h4>
            </div>

        </div>
    );

}

export default Projects;