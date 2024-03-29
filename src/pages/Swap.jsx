import React, { useState } from 'react'

import "../swap_styles/Swap.css"

/* ////// PAGES ////// */
import Navbar from '../homepage_components/Navbar';
import ConnectWalletContainer from '../homepage_components/ConnectWalletContainer';
import Slippage from '../swap_components/Slippage';
import SelectToken from '../swap_components/SelectToken';


import tokenList from "../tokenList.json"

/* ////// IMAGES ////// */
import settingIcon from "../assets/icons/setting-icon.png";
import swapIcon from "../assets/icons/swap_icon.png";
import arrowDown from "../assets/icons/arrow-down.png"

export default function Swap() {
    const [connectWalletVisible, setConnectWalletVisible] = useState(false);

    const toggleConnectWallet = () => {
        setConnectWalletVisible(!connectWalletVisible);
    };

    const [editSlippage, setEditSlippage] = useState(false);

    const toggleSlippageSetting = () => {
        setEditSlippage(!editSlippage);
    };

    const [tokenOne, setTokenOne] = useState(tokenList[0]);
    const [tokenTwo, setTokenTwo] = useState(tokenList[1]);

    const [selectTokenVisibility, setSelectTokenVisibility] = useState(false);

    function switchTokens() {
        const one = tokenOne;
        const two = tokenTwo;
        setTokenOne(two);
        setTokenTwo(one);
    }

    const selectVisibility = () => {
        setSelectTokenVisibility(!selectTokenVisibility);
    }

    return (
        <div>
            <header>
                <Navbar onConnectClick={toggleConnectWallet} />
                {connectWalletVisible && (< ConnectWalletContainer />)}
            </header>

            <main className='swap-main'>
                {selectTokenVisibility && (<SelectToken />)}
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
                            <div className="first-token-amount">
                                <input type="text" placeholder='0.0' name="" id="" className='token-amount' />
                                <div className='first-token-swap' onClick={selectVisibility}>
                                    <img src={tokenOne.img} alt="" className='assetLogo' />
                                    <p className='token-name'>{tokenOne.ticker}</p>
                                    <img src={arrowDown} alt="" className='arrow-down' />
                                </div>
                            </div>

                        </div>
                        <div className="second-token">
                            <p className='to'>To</p>
                            <div className="second-token-amount">
                                <input type="text" placeholder='0.0' name="" id="" className='token-amount' />
                                <div className='second-token-swap' onClick={selectVisibility}>
                                    <img src={tokenTwo.img} alt="" className='assetLogo' />
                                    <p className='token-name'>{tokenTwo.ticker}</p>
                                    <img src={arrowDown} alt="" className='arrow-down' />
                                </div>
                            </div>
                        </div>
                        <div className="swap-icon-cont" onClick={switchTokens}>
                            <div className="swap-icon-inner">
                                <img src={swapIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <button className='swap-btn'>Swap</button>
                </div>
                {editSlippage && (<Slippage />)}
            </main>

        </div>

    )
}
