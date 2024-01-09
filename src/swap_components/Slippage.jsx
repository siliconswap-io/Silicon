import React, { useState } from 'react'

import "../swap_styles/Slippage.css"


import closeIcon from "../assets/icons/close-icon.png"
import arrowDown from "../assets/icons/arrow-down.png"

const Slippage = () => {

    const [slippageValue] = useState(0.5)
    const [txnValue] = useState(20);

    const [editSlippage, setEditSlippage] = useState(true);
    const toggleSlippageSetting = () => {
        setEditSlippage(!editSlippage);
    };

    return (editSlippage && (
        <div className='slippage-container'>
            <div className="setting-x">
                <h3>Setting</h3>
                <div onClick={toggleSlippageSetting} >
                    <img src={closeIcon} alt="" />
                </div>

            </div>
            <div className="slippage-text">
                <p className="first-p">Slippage(%)</p>
                <p className='reset'>Reset</p>
            </div>
            <div className="slippage-input">
                <input type="text" value={slippageValue} readOnly id="" />
                <img src={arrowDown} alt="" />
            </div>
            <p className='txn-text'>Txn Deadline (mins)</p>
            <div className="txn">
                <input type="text" value={txnValue} readOnly id="" />
                <img src={arrowDown} alt="" />
            </div>
            <button className='save-changes-btn'>Save Changes</button>
        </div>
    ))
}

export default Slippage;