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
                <h3>MechLevels</h3>
                <h4>A website that shows Mechanical Engineers compensations from top companies, developed with React.js and Firebase.</h4>
            </div>
            <div className="studentlistcontainer">
                <h3>Resumer(in-progress)</h3>
                <h4>A platform where people can scan their resume on this platform, and the platform will give them interview questions for them to prepare, being developed with React.js, Firebase, and TensorFlow.js.</h4>
            </div>

        </div>
    );

}

export default Projects;