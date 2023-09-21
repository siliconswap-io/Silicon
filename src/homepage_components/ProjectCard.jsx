import React from 'react'
import { useState } from 'react';

/* ////// IMAGES ////// */
import DicordIcon from "../assets/icons/discord-icon.png";
import WebIcon from "../assets/icons/web-icon.png";
import XIcon from "../assets/icons/x-icon.png";
import TelegramIcon from "../assets/icons/telegram-icon.png";





const ProjectCard = (props) => {
    // props for card header 
    const {cardLogo, cardName, cardDesc, cardCoin } = props;

    const {raisedAsset, baseCurrency} = props;

    // state for values 
    const [totalRaised, setTotalRaised] = useState(100);
    const [value, setValue] = useState(120);
    const [mainSize, setMainSize] = useState(10)
    

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

            <img src={cardCoin} alt='' />
        </div>

        <div className='value-flex'>
            <p>Total raise {totalRaised}K</p>
            <p>Value {value}K</p>
            <p>Main size {mainSize}</p>
        </div>

        <div className='progress-bar-cont'>

            <div className='raised-asset-cont'>
                <p>{raisedAsset}</p>
                <p>{baseCurrency}</p>
            </div>
        </div>

        <div className='participate'>
            <button>Participate</button>
            <div className="social-icons">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={XIcon} alt="" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={TelegramIcon} alt="" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={WebIcon} alt="" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={DicordIcon} alt="" />
                </a>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard