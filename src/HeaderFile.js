import React from 'react'; 
import './HeaderFile.css'; 

function HeaderFile() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

  




    return (
        <div className="headerfile">
            <center><h3 className="headerfile__title">Satvik Kasinadhuni</h3></center>
            <a className="class-github-button" onClick={() => {openInNewTab("https://github.com/KasinadhuniProgrammer")}}>GitHub</a>
            <a className="linkedin-button">Linkedin</a>


        </div>
    ); 
}

export default HeaderFile;