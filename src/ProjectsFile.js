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
            <div className="projectfiles__satviksslackproj">
                <center><h1 className="projectheaderthing">Projects 🖥️</h1></center>
                <div className="satviksslackproject__container">
                    <center><button onClick={() => {openInNewTab("https://devpost.com/software/satviks-slack")}} className="satviksslackprojectbutton">
                        <center><img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/317/785/datas/medium.png" alt=""/></center>
                        <center><h1>Satviks Slack</h1></center>
                        <center><h3>My own version of Slack! I developed this with React.js and Firebase. Click here to be directed to its devpost!</h3></center>
                    </button></center>
                </div>
                <div className="mechlevelsproject__container">
                    <center><button onClick={() => {openInNewTab("https://github.com/KasinadhuniProgrammer/MechLevels")}}className="mechlevelsprojbutton">
                        <center><h1>MechLevels</h1></center>
                        <center><h3>This project is still in progress, it is being developed with React.js and Firebase.</h3></center>
                    </button></center>
                </div>
            </div>
            
        </div>
    );

}

export default ProjectsFiles;