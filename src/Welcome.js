import React from 'react';
import './Welcome.css';
import mecoding from './mecoding.jpg';


function Welcome() {


    
    return(
        <div className="welcome">
            <center><h1>Hello | Namaskaram</h1></center>
            <center><img className="mecodingimg"src={mecoding}/></center>
            <center><h3 className="firstpara__welcome">My name is Satvik. I'm a 15-year-old, Connecticut-born, Indian-American High School Student with a passion for Software Engineering. I am fluent in both English and Telugu(an Indian language spoken in the South of India, mainly in the Indian states Andhra Pradesh and Telangana).</h3></center>
            <center><h3 className="secondpara__welcome">I mainly do lots of Full Stack development with React.js and Firebase. But I also have experience with developing Tcl/Tk applications using Python, and operating Linux Systems.</h3></center>
            <center><h3>When I am not programming, I am usually playing cricket, biking, or learning more about my Indian culture!</h3></center>

        </div>
    );
}

export default Welcome;