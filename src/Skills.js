import React from 'react';
import './Skills.css';

function Skills() {
    return(
        <div className="skills">
            <center><h1>🛠️ SKILL SET</h1></center>
            <div className="first-ul">
                <ul className="first__first-ul">
                    <li>React.js</li>
                    <li>Firebase</li>
                    <li>Java</li>
                    <li>Git</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className="second-ul">
                <ul className="second__second-ul">
                    <li>C#</li>
                    <li>C++</li>
                    <li>Linux</li>
                    <li>TensorFlow.js</li>
                    <li>Docker</li>
                </ul>
            </div>
        </div>
    ); 
}

export default Skills;