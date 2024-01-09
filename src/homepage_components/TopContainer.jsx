import React from "react";

import '../homepage_styles/TopContainer.css';

import TOpImage from "../assets/images/top-image.png"
import Rocket from "../assets/images/rocket.png"
import LaunchappIcon from "../assets/icons/launchapp-icon.png";



function TopContainer() {
    return <div className="top-container">
        <h1>Trade Crypto Securely with SiliconSwap - The Pioneer DEX for DeFi</h1>
        <div className="top-flex">
            <div className="top-text-container">
                <h4>Experience DeFi's Future at SiliconSwap - The Decentralized 
                    Exchange for Secure Crypto Trading
                </h4>
                <p>Unlock the power of DeFi with SiliconSwap, the cutting-edge 
                    decentralized exchange (DEX) built on the blockchain. 
                    Trade, swap, and invest in cryptocurrencies securely and privately. 
                    Embrace the future of finance with our user-friendly  interface, 
                    lightning-fast transactions and unmatched liquidity.
                </p>
                <a href="https://example.com">
                    <button className="launchapp-btn">
                        <img src={LaunchappIcon} alt=""/>
                        Launch dApp
                    </button>
                </a>
                
            </div>
            <img src={Rocket} className="rocket-icon" alt=""/>
            <img src={TOpImage} className="top-image" alt=""/>

        </div>
    </div>
    
}

export default TopContainer;