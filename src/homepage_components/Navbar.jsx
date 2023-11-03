import React/*, {useState}*/ from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';

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
            <a href="/Home" className="silicon-logo">
                <img src={logo} alt='' />
            </a>
            <ul>
                <li>
                    <NavLink to="/" exact  >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Swap" >Swap</NavLink>
                </li>
                <li>
                    <NavLink to="/Launchpad" >Launchpad</NavLink>
                </li>
                <li>
                    <NavLink to="/Earn" >Earn</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" >Contact</NavLink>
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