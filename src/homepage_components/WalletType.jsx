import React from 'react'

const WalletType = (props) => {

    const {walletLogo, walletName} = props;

  return (
    <div className='wallet-type'>
        <div className='wallet-logo'>
            <img src={walletLogo} alt="" />
        </div>
        <p>{walletName}</p>
    </div>
  )
}

export default WalletType;
