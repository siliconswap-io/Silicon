import React, { useState } from 'react'

import "../swap_styles/Swap.css"

/* ////// PAGES ////// */
import Navbar from '../homepage_components/Navbar';
import ConnectWalletContainer from '../homepage_components/ConnectWalletContainer';
import Slippage from '../swap_components/Slippage';

/* ////// IMAGES ////// */
import settingIcon from "../assets/icons/setting-icon.png";
import swapIcon from "../assets/icons/swap_icon.png";

export default function Swap() {
    const [connectWalletVisible, setConnectWalletVisible] = useState(false);

    const toggleConnectWallet = () => {
        setConnectWalletVisible(!connectWalletVisible);
    };

    const [editSlippage, setEditSlippage] = useState(false);

    const toggleSlippageSetting = () => {
    setEditSlippage(!editSlippage);
  };

    return (
        <div>
            <header>
                <Navbar onConnectClick={toggleConnectWallet} />
                {connectWalletVisible && (< ConnectWalletContainer />)}
            </header>

            <main className='swap-main'>
                <div className='swap-container'>
                    <div className="title-setting">
                        <h2>Swap</h2>
                        <div className='setting-icon' onClick={toggleSlippageSetting}>
                            <img src={settingIcon} alt="" />
                        </div>
                    </div>

                    <div className="token-swap">
                        <div className="first-token">
                            <p className='from'>From</p>
                            <div className='first-token-swap'>
                                <p>0.0</p>
                                <select name="" id="">
                                    <option value="ETH">ETH</option>
                                </select>
                            </div>
                        </div>
                        <div className="second-token">
                            <p className='to'>To</p>
                            <div className="second-token-swap">
                                <p>0.0</p>
                                <select name="" id="">
                                    <option value="BTC">BTC</option>
                                </select>
                            </div>
                        </div>
                        <div className="swap-icon-cont">
                            <div className="swap-icon-inner">
                                <img src={swapIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <button className='swap-btn'>Swap</button>
                </div>    
                {editSlippage && (<Slippage /> )}
            </main>

        </div>

    )
}
