import React from 'react'

import '../homepage_styles/ConnectWalletContainer.css'

/* ////// IMAGES ////// */
import CloseIcon from "../assets/icons/close-icon.png";
import trustWallet from "../assets/images/trust_wallet.png";
import metaMask from "../assets/images/meta_mask.png";
import phantom from "../assets/images/phantom.png";
import coinBase from "../assets/images/coinbase.png";
import coin98 from "../assets/images/coin98.png";
import enjin from "../assets/images/enjin.png";
import braveWallet from "../assets/images/brave_wallet.png";
import walletConnect from "../assets/images/wallet_connect.png";

/* ////// PAGES ////// */
import  WalletType from './WalletType';


const ConnectWalletContainer = () => {
  return (
    <div className='connect-wallet-container'>
        <div className="connect-wallet">
            <div className="connect-text">
                <h3>Connect Wallet</h3>
                <p>Select your wallet from the options below to get started.</p>
            </div>
            <img className='close-icon' src={CloseIcon} alt="" />
        </div>

        <div className="wallet-types-cont">
            <WalletType walletLogo={trustWallet} walletName="TrustWallet" />
            <WalletType walletLogo={metaMask} walletName="MetaMask" />
            <WalletType walletLogo={phantom} walletName="Phantom" />
            <WalletType walletLogo={coinBase} walletName="Coinbase" />
            <WalletType walletLogo={walletConnect} walletName="WalletConnect" />
            <WalletType walletLogo={coin98} walletName="Coin98" />
            <WalletType walletLogo={braveWallet} walletName="BraveWallet" />
            <WalletType walletLogo={enjin} walletName="Enjin" />
        </div>

    </div>
  )
}

export default ConnectWalletContainer;