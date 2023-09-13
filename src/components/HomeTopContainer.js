import React from "react";

import '../styles/Style.css';

import TOpImage from "../assets/images/top-image.png"
import Rocket from "../assets/images/rocket.png"
import LaunchappIcon from "../assets/icons/launchapp-icon.png";



function HomeTopContainer() {
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
                <button className="launchapp-btn">
                    <img src={LaunchappIcon} />
                    Launch dApp
                </button>
            </div>
            <img src={Rocket} className="rocket-icon" />
            <img src={TOpImage} />

        </div>
    </div>
    
}

export default HomeTopContainer;