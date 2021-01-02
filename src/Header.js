import React from 'react';
import './Header.css';
import FRESHMANYEARFIRSTIMAGE from './FRESHMANYEARFIRSTIMAGE.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ReceiptIcon from '@material-ui/icons/Receipt';
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
            <ReceiptIcon className="header__resume-icon" onClick={() => {openInNewTab("https://s3.amazonaws.com/attachments.angel.co/5388799-cd01472fc5dcc4322d382a7ee1b22fad.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20210102%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210102T142028Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=fa5a5963140651b9940453c3a7c41585580d34a0c95ac11ad6206dc01683b463")}}/>


        </div>
    );
}

export default Header;