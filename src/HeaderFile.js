import React from 'react'; 
import './HeaderFile.css'; 

function HeaderFile() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <div className="headerfile">
            <center><img className="myimg" src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/121/880/datas/xlarge.png" alt=""/></center>
            <h1 className="mename"><center>Satvik Kasinadhuni</center></h1>
            <h1 className="meranddescription"><center>High School Student | Full Stack Developer</center></h1>
            <center><button onClick={() => {openInNewTab("https://github.com/KasinadhuniProgrammer")}} className="github-button"><center>GitHub</center></button></center>
            <center><button onClick={() => {openInNewTab("https://www.linkedin.com/in/satvik-kasinadhuni/")}}className="linkedin-button"><center>Linkedin</center></button></center>

        </div>
    ); 
}

export default HeaderFile;