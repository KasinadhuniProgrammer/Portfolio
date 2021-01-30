import React from 'react';
import './Achievements.css';

function Achievements() {
    return(
        <div className="achievements">
            <center><h1>🏆 ACHIEVEMENTS</h1></center>
            <div className="achievements__ftcone">
                <h3 className="ftcone__title">FTC 2020 CT State Championship: First Place Alliance</h3>
                <h4>In the FTC 2020 Connecticut State Championship, we(FTC team 12923)</h4>
                <h4>were the First Place Alliance in the competition and got awarded the</h4>
                <h4>Winning Alliance Award in the competition.</h4>
            </div>
            <div className="achievements__presidentialone">
                <h3 className="presidentialone__title">Presidential Service Award(President's Volunteer Service Award)</h3>
                <h4>Awarded the Presidential Service Award for doing additional volunteer</h4>
                <h4>work at iStart Valley for over 100 hours. I will be receiving the gold</h4>
                <h4>medal for volunteering over 100 hours at the age of 15.</h4>
            </div>
        </div>
    );
}

export default Achievements;