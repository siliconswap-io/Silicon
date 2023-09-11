/* ////// IMAGES ////// */
import HowImg from "../assets/images/how-img.png";
import KycImg from "../assets/images/kyc-img.png";
import VerifyImg from "../assets/images/verify-img.png";
import StartStakingImg from "../assets/images/start-staking-img.png";


/* ////// PAGES ////// */
import HowContent from './Home-how-content';
import Sections from './Home-section';
import SubSections from './Home-sub-sections';
import Line from './Home-lines';



import React from 'react'

const HowItWorksContainer = () => {
  return (
    <div className='how-it-works-container'>
        <div className='section-title'>
            <div className='title-flex'>
                <Sections section="HOW IT WORKS" />
                <Line/>
            </div>
            <SubSections SubSection="How to participate"  />
        </div>
        <p>Join IDOs on multiple blockchains in a single click. 
            Support game byproviding IP or just stake the game and get rewards.
        </p>
        <div className='img-content-flex'>
            <img src={HowImg} />
            <div className="how-content-container">
                <div className="kyc">
                    <HowContent howH4="Submit KYC" howP="Join IDOs on multiple blockchains in a single click. 
                        Support game by providing and get rewards." 
                    />
                    <img src={KycImg} />
                </div>
                <div className="verify">
                    <HowContent howH4="Verify Wallet" howP="Join IDOs on multiple blockchains in a single click. 
                        Support game by providing and get rewards." 
                    />
                    <img src={VerifyImg} />
                </div>
                <div className="start-staking">
                    <HowContent howH4="Start Staking" howP="Join IDOs on multiple blockchains in a single click. 
                        Support game by providing and get rewards." 
                    />
                    <img src={StartStakingImg} />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default HowItWorksContainer