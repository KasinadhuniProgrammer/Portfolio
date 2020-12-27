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
                    <center><h4>Description: My own version of Slack.</h4></center>
                    <center><h4>Team: Satvik Kasinadhuni(Full Stack Developer)</h4></center>
                    <center><h4>Tools and Technologies: React.js, Firebase</h4></center>

                </div>
                <div className="mechlevelsprojectthing">
                    <div className="mechlevelsprojectthing__container">
                        <center><h2>MechLevels</h2></center>
                        <center><h3>December 2020 - PRESENT</h3></center>
                        <center><h4>Description: A website for Mechanical Engineers to see compensations from top companies.</h4></center>
                        <center><h4>Team: Satvik Kasinadhuni(Full Stack Developer), Satvik Agnihotram(UI/UX Designer)</h4></center>
                        <center><h4>Tools and Technologies: React.js, Firebase, Figma</h4></center>

                    </div>
                    
                </div>
                <div className="studentslistprojectthing">
                    <div className="studentslistprojectthing__container">
                        <center><h2>StudentList</h2></center>
                        <center><h3>December 2020 - PRESENT</h3></center>
                        <center><h4>Description: A website for High School Students to find Internships and Research Opportunities</h4></center>
                        <center><h4>Team: Satvik Kasinadhuni(Full Stack Developer), Sai Vishal Chinta(Frontend Developer), Sai Raparla(Frontend Developer)</h4></center>
                        <center><h4>Tools and Technologies: React.js, Firebase, Figma</h4></center>
                    </div>
                </div>
            </div>
            
        </div>
    );

}

export default ProjectsFiles;