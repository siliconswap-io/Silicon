import React from 'react';

/* ////// IMAGES ////// */
import StakingImg from "../assets/images/staking-img.png";
import YieldImg from "../assets/images/yield-img.png";
import LendingImg from "../assets/images/lending-img.png";

/* ////// PAGES ////// */
import Sections from './Sections';
import SubSections from './SubSections';
import Line from './Line';
import FeaturesCard from './FeaturesCard';


function HomeFeaturesContainer() {
    return <div className='features-container'>
        <div >
            <div>
                <Sections section="FEATURES" />
                <Line/>
            </div>
            <SubSections SubSection="What we offer"  />
        </div>
        <div className='features-flex'>
            <div className='staking'>
                <img src={StakingImg} />
                <FeaturesCard cardTitle="Staking" 
                    cardContent="Silicon Swap enables you to participate in the network's consensus
                     mechanism and earn rewards in return. By staking your tokens, 
                     you actively contribute to the security and decentralization 
                     of this platform, all while reaping the benefits of passive income. 
                     Embrace the potential of staking and watch your assets grow effortlessly.
                    "
                    btnText="Stake Now"
                />
            </div>
            <div className='yield'>
                <img src={YieldImg} />
                <FeaturesCard cardTitle="Yield Farms" 
                    cardContent="Silicon Swap allows you to become a liquidity provider, 
                    offering your digital assets to various liquidity pools. As a provider, 
                    you will receive attractive yields as a reward for contributing to the 
                    overall liquidity and efficiency of the ecosystem. Diversify your holdings 
                    and unlock new earning opportunities with our yield farming.
                    "
                    btnText="Farm"
                />
            </div>
            <div className='lending'>
                <img src={LendingImg} />
                <FeaturesCard cardTitle="Lending & Borrowing" 
                    cardContent="Silicon Swap empowers you with the ability to lend and borrow digital assets. 
                    As a lender, you can earn interest on your idle tokens, 
                    while borrowers gain access to much needed liquidity without the cumbersome 
                    processes of traditional finance. Enjoy a seamless experience, 
                    all within a secure and transparent environment.
                    "
                    btnText="Liquidity"
                />
            </div>
        </div>


    </div> 
}


export default HomeFeaturesContainer;
