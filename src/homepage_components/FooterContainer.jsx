import React from 'react'

import "../homepage_styles/FooterContainer.css"

/* ////// IMAGES ////// */
import logo from '../assets/images/sslog_a 1.png';
import DicordIcon from "../assets/icons/discord-icon.png";
import XIcon from "../assets/icons/x-icon.png";
import YoutubeIcon from "../assets/icons/youtube-icon.png";

/* ////// PAGES ////// */
import FooterSections from './FooterSections';

const FooterContainer = () => {
    return (
        <div className='footer-container'>
            <div className="logo-section">
                <img src={logo} alt="" />
                <p>The next-generation web3 platform that empowers you to
                    swap assets effortlessly and securely. Embrace the future
                    of decentralized finance with our user-friendly and
                    innovative swapping solution.
                </p>
                <div className="silicon-socials">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src={DicordIcon} alt="" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src={XIcon} alt="" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src={YoutubeIcon} alt="" />
                    </a>
                </div>
            </div>

            <FooterSections title="ABOUT" link1="Contact" link2="Github" link3="Media Kit"
                link4="Silicon Token" href1="http://example.com" href2="http://example.com"
                href3="http://example.com" href4="http://example.com" target2="_blank" 
                rel2="noopener noreferrer" target3="_blank" rel3="noopener noreferrer"
            />

            <FooterSections title="COMMUNITY" link1="Medium" link2="X(twitter)" link3="Discord"
                link4="Telegram" href1="http://example.com" href2="http://example.com"
                href3="http://example.com" href4="http://example.com" target1="_blank"
                rel1="noopener noreferrer" target2="_blank" rel2="noopener noreferrer" 
                target3="_blank" rel3="noopener noreferrer" target4="_blank" rel4="noopener noreferrer"
            />

            <FooterSections title="HELP" link1="Documentation" link2="Troubleshooting" link3="Research"
                link4="Disclaimer" href1="http://example.com" href2="http://example.com"
                href3="http://example.com" href4="http://example.com"
            />

        </div>
    )
}

export default FooterContainer