import React from 'react';

import logo from '../assets/images/sslog_a 1.png';
import searchIcon from '../assets/icons/search-icon.png';
import walletIcon from '../assets/icons/wallet-icon.png';
import AnchorTags from './Nabar-tags'

import '../styles/Navbar.css'


function navbar() {
    return <nav className="nav">
        <a href="" className="silicon-logo">
            <img src={logo} />
        </a>
        <ul>
            <AnchorTags tags="Home" />
            <AnchorTags tags="Swap" />
            <AnchorTags tags="Launchpad" />
            <AnchorTags tags="Earn" />
            <AnchorTags tags="Contact" />
        </ul>
        <img className="search-icon" src={searchIcon} />
        <button className="connect-btn">
            <img src={walletIcon} />
            Connect Wallet
        </button>
    </nav>

}

export default navbar;