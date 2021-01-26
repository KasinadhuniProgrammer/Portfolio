import React from 'react';
import './Welcome.css';


function Welcome() {


    
    return(
        <div className="welcome">
            <center><h1>Hello | Namaskaram</h1></center>
            <center><h3 className="firstpara__welcome">My name is Satvik. I'm a 15-year-old, Connecticut-born, Indian-American High School Student with a passion for Software Engineering. I am fluent in both English and Telugu(an Indian language spoken in the South of India, mainly in the Indian states Andhra Pradesh and Telangana).</h3></center>
            <center><h3 className="secondpara__welcome">I mainly do lots of Full Stack development with React.js and Firebase. But I also have experience with developing Tcl/Tk applications using Python, operating Linux Systems, and working with Autodesk Inventor.</h3></center>
            <center><h3 className="thirdpara__welcome">I am a Sophomore at Farmington High School and am taking many STEM courses. In Freshman year, I took Honors Physics, Geometry, Algebra 2A, and challenged myself with taking AP Computer Science Principles as a Freshman. Currently, I am taking Chemistry Honors, Algebra 2B, AP Computer Science A, and Principles of Engineering Honors. I am also involved in some extracurricular STEM activities such as, being part of my schools Hack Club, and being part of a First Tech Challenge team.</h3></center>
            <center><h3 className="fourthpara__welcome">I am looking for Software Engineering Internships for the summer of 2021.</h3></center>
            <center><h3 className="fifthpara__welcome">After High School, I am interested to go to college and study both Computer Science and Mechanical Engineering. After four years in college, I am interested to pursue a Masters degree in Computer Science and eventually work for a company as a Software Engineer.</h3></center>
            <center><h3 className="sixthpara__welcome">When I am not programming or doing anything engineering related, I'm probably spending time with my family, watching cricket, playing golf, or reading books by my favorite author and entrepreneur Eric Ries.</h3></center>

        </div>
    );
}

export default Welcome;