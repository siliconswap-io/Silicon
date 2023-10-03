import React from 'react'

import '../homepage_styles/HowItWorksContainer.css'

/* ////// IMAGES ////// */
import HowImg from "../assets/images/how-img.png";
import KycImg from "../assets/images/kyc-img.png";
import VerifyImg from "../assets/images/verify-img.png";
import StartStakingImg from "../assets/images/start-staking-img.png";


/* ////// PAGES ////// */
import Sections from "./Sections";
import Line from "./Line";
import SubSections from "./SubSections";
import HowContent from './HowContent';

const HowItWorksContainer = () => {
  return (
    <div className='how-it-works-container'>
       <div>
            <div className='title-flex'>
                <Sections section="HOW IT WORKS" />
                <Line/>
            </div>
            <SubSections SubSection="How to participate"  />
        </div>
        <p className='how-p' >Join IDOs on multiple blockchains in a single click. 
            Support game by providing IP or just stake the game and get rewards.
        </p>
        <div className='img-content-flex'>
            <img className='img-content' src={HowImg} alt=''/>
            <div className="how-content-container">
                <div className="kyc div">
                    <HowContent howH4="Submit KYC" howP="Join IDOs on multiple blockchains in a single click. 
                        Support game by providing and get rewards." 
                    />
                    <img src={KycImg} alt=''/>
                </div>
                <div className="verify div">
                    <HowContent howH4="Verify Wallet" howP="Join IDOs on multiple blockchains in a single click. 
                        Support game by providing and get rewards." 
                    />
                    <img src={VerifyImg} alt=''/>
                </div>
                <div className="start-staking div">
                    <HowContent howH4="Start Staking" howP="Join IDOs on multiple blockchains in a single click. 
                        Support game by providing and get rewards." 
                    />
                    <img src={StartStakingImg} alt=''/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default HowItWorksContainer;