import React/*, {useState}*/ from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import '../homepage_styles/Navbar.css'

import logo from '../assets/images/sslog_a 1.png';
import searchIcon from '../assets/icons/search-icon.png';
import walletIcon from '../assets/icons/wallet-icon.png';

// import NabarTags from './NabarTags'
// import ConnectWalletContainer from './ConnectWalletContainer';

library.add(fas);

function Navbar({ onConnectClick }) {
    //     const [connectWalletVisible, setConnectWalletVisible] = useState(false);

    //   const toggleConnectWallet = () => {
    //     setConnectWalletVisible(!connectWalletVisible);
    //   };

    return <div>
        <nav className="nav">
            <a href="https://example.com" className="silicon-logo">
                <img src={logo} alt='' />
            </a>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/Swap" >Swap</Link>
                </li>
                <li>
                    <Link to="/Launchpad" >Launchpad</Link>
                </li>
                <li>
                    <Link to="/Earn" >Earn</Link>
                </li>
                <li>
                    <Link to="/Contact" >Contact</Link>
                </li>
            </ul>
            <img className="search-icon" src={searchIcon} alt='' />
            <button className="connect-btn" onClick={onConnectClick}>
                <img src={walletIcon} alt='' />
                Connect Wallet
            </button>
            <FontAwesomeIcon icon="fa-solid fa-bars-staggered" className='bar-icon' />
        </nav>
        {/* {connectWalletVisible && (< ConnectWalletContainer />
)} */}


    </div>

}

export default Navbar;