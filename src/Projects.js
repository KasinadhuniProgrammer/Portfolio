import React from 'react';
import './Projects.css';

function Projects() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="projects">
             <center><h1>👨‍💻 PROJECTS</h1></center>
            <div className="slackclonecontainer" onClick={() => {openInNewTab("https://github.com/KasinadhuniProgrammer/SatviksSlack")}}>
                <h3>Satviks Slack</h3>
                <h4>My own version of Slack.</h4>
                <h4>Developed with React.js and Firebase</h4>
            </div>
            <div className="mechlevelscontainer" onClick={() => {openInNewTab("https://github.com/KasinadhuniProgrammer/MechLevels")}}>
                <h3>MechLevels</h3>
                <h4>A website that shows Mechanical Engineers compensations from top companies.</h4>
                <h4>Developed with React.js and Firebase</h4>
            </div>
            <div className="studentlistcontainer">
                <h3>Resumer(in-progress)</h3>
                <h4>A platform where people can scan their resume on this platform, and the platform will give them interview questions for them to prepare.</h4>
                <h4>Being developed with React.js, Firebase, and TensorFlow.js</h4>
            </div>

        </div>
    );

}

export default Projects;