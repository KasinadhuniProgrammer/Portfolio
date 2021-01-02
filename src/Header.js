import React from 'react';
import TextTransition, { presets } from "react-text-transition";
import './Header.css';
import Typing from 'react-typing-animation';
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

    const AnimatedTypingComponent = () => (
        <Typing loop={true} speed={20}>
          <span>Student | Developer</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={64} speed={2}/>


        </Typing>
      );



    return (
        <div className="header">
            <center><img className="header__imageh" src={FRESHMANYEARFIRSTIMAGE}/></center>
            <center><h1 className="header__nameh">Satvik Kasinadhuni</h1></center>
            <center><h2><AnimatedTypingComponent /></h2></center>
            <GitHubIcon className="header__github-icon" onClick={() => {openInNewTab("https://github.com/KasinadhuniProgrammer")}}/>
            <LinkedInIcon className="header__linkedin-icon" onClick={() => {openInNewTab("https://www.linkedin.com/in/satvik-kasinadhuni")}}/>
            <TwitterIcon className="header__twitter-icon" onClick={() => {openInNewTab("https://twitter.com/ChubbyIndianBoy")}}/>


        </div>
    );
}

export default Header;