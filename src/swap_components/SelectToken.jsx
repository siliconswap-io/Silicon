import React, { useState } from 'react';

import tokenList from "../tokenList.json";

import "../swap_styles/SelectToken.css";

/* ////// IMAGES ////// */
import closeIcon from "../assets/icons/close-icon.png";

const SelectToken = () => {

  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);

  const [selectTokenVisibility, setSelectTokenVisibility] = useState(true);

  const selectVisibility = () => {
    setSelectTokenVisibility(!selectTokenVisibility);
  }

  return ( selectTokenVisibility && (
    <div className='select-token-container'>
      <div className="select-x">
        <h3>Select Token</h3>
        <div>
          <img src={closeIcon} alt="" className='select-close' onClick={selectVisibility}/>
        </div>
      </div>
      <input type="search" placeholder='Search by token name or CA' name="" id="" className='coin-search' />
      <p className='common-tokens-p'>Common tokens</p>
      <div className="common-tokens">
        <div className="c-token">
          <img src={tokenOne.img} alt="" />
          <p>{tokenOne.ticker}</p>
        </div>
        <div className="c-token">
          <img src={tokenOne.img} alt="" />
          <p>{tokenOne.ticker}</p>
        </div>
        <div className="c-token">
          <img src={tokenOne.img} alt="" />
          <p>{tokenOne.ticker}</p>
        </div>
        <div className="c-token">
          <img src={tokenOne.img} alt="" />
          <p>{tokenOne.ticker}</p>
        </div>
        <div className="c-token">
          <img src={tokenOne.img} alt="" />
          <p>{tokenOne.ticker}</p>
        </div>
        <div className="c-token">
          <img src={tokenOne.img} alt="" />
          <p>{tokenOne.ticker}</p>
        </div>
        <div className="c-token">
          <img src={tokenOne.img} alt="" />
          <p>{tokenOne.ticker}</p>
        </div>
        <div className="c-token">
          <img src={tokenOne.img} alt="" />
          <p>{tokenOne.ticker}</p>
        </div>
      </div>
      <p className='listed-tokens-p'>Listed Tokens</p>

      <div className="listed-tokens">
        <div className="l-tokens">
          <div className="token-name-img">
            <img src={tokenTwo.img} alt="" />
            <div className="name-symbol">
              <p className='symbol'>ARB</p>
              <p className='l-token-name'>Arbitrum</p>
            </div>
          </div>
          <p className='token-holding'>0</p>
        </div>

        <div className="l-tokens">
          <div className="token-name-img">
            <img src={tokenTwo.img} alt="" />
            <div className="name-symbol">
              <p className='symbol'>ARB</p>
              <p className='l-token-name'>Arbitrum</p>
            </div>
          </div>
          <p>0</p>
        </div>

        <div className="l-tokens">
          <div className="token-name-img">
            <img src={tokenTwo.img} alt="" />
            <div className="name-symbol">
              <p className='symbol'>ARB</p>
              <p className='l-token-name'>Arbitrum</p>
            </div>
          </div>
          <p>0</p>
        </div>

        <div className="l-tokens">
          <div className="token-name-img">
            <img src={tokenTwo.img} alt="" />
            <div className="name-symbol">
              <p className='symbol'>ARB</p>
              <p className='l-token-name'>Arbitrum</p>
            </div>
          </div>
          <p>0</p>
        </div>

        <div className="l-tokens">
          <div className="token-name-img">
            <img src={tokenTwo.img} alt="" />
            <div className="name-symbol">
              <p className='symbol'>ARB</p>
              <p className='l-token-name'>Arbitrum</p>
            </div>
          </div>
          <p className='token-holding'>0</p>
        </div>

        <div className="l-tokens">
          <div className="token-name-img">
            <img src={tokenTwo.img} alt="" />
            <div className="name-symbol">
              <p className='symbol'>ARB</p>
              <p className='l-token-name'>Arbitrum</p>
            </div>
          </div>
          <p>0</p>
        </div>

        <div className="l-tokens">
          <div className="token-name-img">
            <img src={tokenTwo.img} alt="" />
            <div className="name-symbol">
              <p className='symbol'>ARB</p>
              <p className='l-token-name'>Arbitrum</p>
            </div>
          </div>
          <p>0</p>
        </div>

        <div className="l-tokens">
          <div className="token-name-img">
            <img src={tokenTwo.img} alt="" />
            <div className="name-symbol">
              <p className='symbol'>ARB</p>
              <p className='l-token-name'>Arbitrum</p>
            </div>
          </div>
          <p>0</p>
        </div>
        
      </div>

      
    </div>
  ))
}

export default SelectToken