import React, { useState } from 'react'

import "../swap_styles/Swap.css"

/* ////// PAGES ////// */
import Navbar from '../homepage_components/Navbar';
import ConnectWalletContainer from '../homepage_components/ConnectWalletContainer';

/* ////// IMAGES ////// */
import settingIcon from "../assets/icons/setting-icon.png";
import swapIcon from "../assets/icons/swap_icon.png";

export default function Swap() {
    const [connectWalletVisible, setConnectWalletVisible] = useState(false);

    const toggleConnectWallet = () => {
        setConnectWalletVisible(!connectWalletVisible);
    };
    return (
        <div>
            <header>
                <Navbar onConnectClick={toggleConnectWallet} />
                {connectWalletVisible && (< ConnectWalletContainer />)}
            </header>

            <main>
                <div className='swap-container'>
                    <div className="title-setting">
                        <h2>Swap</h2>
                        <div  className='setting-icon'>
                            <img src={settingIcon} alt="" />
                        </div> 
                    </div>

                    <div className="token-swap">
                        <div className="first-token">
                            <p>0.0</p>
                            <select name="" id="">
                                <option value="ETH">ETH</option>
                            </select>
                        </div>
                        <div className="second-token">
                            <p>0.0</p>
                            <select name="" id="">
                                <option value="BTC">BTC</option>
                            </select>
                        </div>
                        <div className="swap-icon-cont">
                            <div className="swap-icon-inner">
                                <img src={swapIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <button className='swap-btn'>Swap</button>
                </div>
            </main>

        </div>

    )
}
