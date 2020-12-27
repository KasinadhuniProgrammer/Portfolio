import React from 'react';
import './Extracurriculars.css';

function Extracurriculars() {
    return (
        <div className="extracurriculars">
            <center><h1>Education 👨‍🎓</h1></center>
            <div className="extracurriculars__highschool">
                <center><h2 className="FHSTITLERANDOM">Farmington High School</h2></center>
                <center><h3 className="FHSRANDOMDESCR">AUGUST 2019 - PRESENT(EXPECTED JUNE 2023)</h3></center>
                <center><h4>Engineering and Computer Science classes: Physics, AP Computer Science Principles, AP Computer Science A, Principles of Engineering</h4></center>
            </div>
            <div className="extracurriculars__middleschool">
                <center><h2 className="IARTITLERANDOM">Irving A. Robbins Middle School</h2></center>
                <center><h3 className="IARRANDOMDESCR">AUGUST 2017 - JUNE 2019</h3></center>
            </div>

        </div>
    );

}

export default Extracurriculars;