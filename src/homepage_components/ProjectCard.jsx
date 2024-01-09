import React from 'react'
import { useState } from 'react';

/* ////// IMAGES ////// */
import DicordIcon from "../assets/icons/discord-icon.png";
import WebIcon from "../assets/icons/web-icon.png";
import XIcon from "../assets/icons/x-icon.png";
import TelegramIcon from "../assets/icons/telegram-icon.png";
import Progressbar from './Progressbar';
// import ProgressBar from '@ramonak/react-progress-bar';





const ProjectCard = (props) => {
    // props for card header 
    const { cardLogo, cardName, cardDesc, cardCoin } = props;

    // props for asset and currency
    const { raisedAsset, baseCurrency } = props;

    // state for values 
    const [totalRaised] = useState(100);
    const [value] = useState(120);
    const [mainSize] = useState(10)

    // const [width, setWidth] = useState(50);

    return (
        <div className='project-card'>
            <div className='card-name'>
                <div className='card-logo-text'>
                    <img src={cardLogo} alt='' />
                    <div className='card-text'>
                        <h4>{cardName}</h4>
                        <p>{cardDesc}</p>
                    </div>
                </div>

                <img className='card-coin' src={cardCoin} alt='' />
            </div>

            <div className='value-flex'>
                <p>Total raise <span>{totalRaised}K</span></p>
                <p>Value <span>{value}K</span></p>
                <p>Main size <span>{mainSize}</span></p>
            </div>

            <div className='progress-bar-cont'>
            <Progressbar bgcolor="#0047FF" height={32} />
                <div className='raised-asset-cont'>
                    <p>{raisedAsset}</p>
                    <p>{baseCurrency}</p>
                </div>
            </div>

            <div className='participate'>
                <button>Participate</button>
                <div className="social-icons">
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img src={XIcon} alt="" />
                    </a>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img src={TelegramIcon} alt="" />
                    </a>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img src={WebIcon} alt="" />
                    </a>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img src={DicordIcon} alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard