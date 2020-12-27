import React from 'react';
import './WelcomeFile.css';
import FRESHMANYEARFIRSTIMAGE from './FRESHMANYEARFIRSTIMAGE.jpg';
function WelcomeFile() {
    return (
        <div className="welcomefile">
            <center><img className="merandompic" src={FRESHMANYEARFIRSTIMAGE} alt=""/></center>
            <center><h1 className="welcomefile__name">Satvik Kasinadhuni</h1></center>
            <center><h3 className="welcomefile__desc">Student. Full Stack Developer. Reactjs Enthusiast.</h3></center>
        </div>
    );
}

export default WelcomeFile;