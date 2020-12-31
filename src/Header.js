import React from 'react';
import './Header.css';
import FRESHMANYEARFIRSTIMAGE from './FRESHMANYEARFIRSTIMAGE.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
function Header() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <div className="header">
            <center><img className="header__imageh" src={FRESHMANYEARFIRSTIMAGE}/></center>
            <center><h1 className="header__nameh">Satvik Kasinadhuni</h1></center>
            <center><h3 className="header__desch">Student | Software Developer</h3></center>
            <GitHubIcon className="header__github-icon" onClick={() => {openInNewTab("https://github.com/KasinadhuniProgrammer")}}/>
            <LinkedInIcon className="header__linkedin-icon" onClick={() => {openInNewTab("https://www.linkedin.com/in/satvik-kasinadhuni")}}/>
            <TwitterIcon className="header__twitter-icon" onClick={() => {openInNewTab("https://twitter.com/ChubbyIndianBoy")}}/>


        </div>
    );
}

export default Header;