import React from 'react'

/* ////// IMAGES ////// */
import HowImg from "../assets/images/how-img.png";
import KycImg from "../assets/images/kyc-img.png";
import VerifyImg from "../assets/images/verify-img.png";
import StartStakingImg from "../assets/images/start-staking-img.png";


/* ////// PAGES ////// */
import HomeSections from "./HomeSection";
import HomeLine from "./HomeLine";
import HomeSubSections from "./HomeSubSections";
import HomeHowContent from './HomeHowContent';

const HomeHowItWorksContainer = () => {
  return (
    <div className='how-it-works-container'>
       <div>
            <div>
                <HomeSections section="HOW IT WORKS" />
                <HomeLine/>
            </div>
            <HomeSubSections SubSection="How to participate"  />
        </div>
        <p>Join IDOs on multiple blockchains in a single click. 
            Support game byproviding IP or just stake the game and get rewards.
        </p>
        <div className='img-content-flex'>
            <img src={HowImg} />
            <div className="how-content-container">
                <div className="kyc">
                    <HomeHowContent howH4="Submit KYC" howP="Join IDOs on multiple blockchains in a single click. 
                        Support game by providing and get rewards." 
                    />
                    <img src={KycImg} />
                </div>
                <div className="verify">
                    <HomeHowContent howH4="Verify Wallet" howP="Join IDOs on multiple blockchains in a single click. 
                        Support game by providing and get rewards." 
                    />
                    <img src={VerifyImg} />
                </div>
                <div className="start-staking">
                    <HomeHowContent howH4="Start Staking" howP="Join IDOs on multiple blockchains in a single click. 
                        Support game by providing and get rewards." 
                    />
                    <img src={StartStakingImg} />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default HomeHowItWorksContainer;