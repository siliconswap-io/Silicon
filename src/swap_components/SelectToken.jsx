import React from 'react'

import closeIcon from "../assets/icons/close-icon.png"

const SelectToken = () => {
  return (
    <div className='select-token-container'>
        <div className="select-x">
                <h3>Select Token</h3>
                <div>
                    <img src={closeIcon} alt="" />
                </div>
        </div>
        <input type="search" name="" id="" />
        <p>Common tokens</p>
        <div className="common-tokens">
            
        </div>
    </div>
  )
}

export default SelectToken